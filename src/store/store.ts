import { create } from 'zustand'

interface Origin {
  name: string;
  url: string;
}
interface Base {
  id: number;
  name: string;
}

interface Character extends Base {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Origin;
  image: string;
}

interface Episode extends Base {
  air_date: string;
  episode: string;
  character: string[];
  url: string;
}



// type Status = "alive" | "dead" | "unknown"
// type Gender = "female" | "male" | "genderless" | "unknown"

interface RyMstate {
  info:Info;
  character: Character[];
  episode: Episode[];
  characterDetail: Character;
  getAllCharacter: () => Promise<void>;
  getAllEpisode: () => Promise<void>;
  getCharacterById: (id: number) => Promise<void>;
  getCharacterByName: (name: string) => void;
}

interface Feching {
  character: string,
  episode: string,
}

const fechingBase: Feching = {
  character: `https://rickandmortyapi.com/api/character`,
  episode: `https://rickandmortyapi.com/api/episode`
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export const useRyMstate = create<RyMstate>((set) => ({
  info: {count:0, pages:0, next:"", prev:""},
  character: [],
  episode: [],
  characterDetail: {
    gender: "",
    id: 0,
    image: "",
    location: { name: "", url: ""},
    name: "",
    origin: { name: "", url: "" },
    species: "",
    status: "",
    type: ""
  },
  getAllCharacter: async () => {
    const res = await fetch(fechingBase.character)
    const data = await res.json()
    set((state) => ({
      ...state,
      character: data.results,
      info:data.info
    }))
  },
  getAllEpisode: async () => {
    const res = await fetch(fechingBase.episode)
    const episode = await res.json()
    set(() => ({
      episode: episode
    }))
  },
  getCharacterById: async (id) => {
    const res = await fetch(fechingBase.character + `/${id}`)
    const character = await res.json()
    set(() => ({
      character: character
    }))
  },
  getCharacterByName: async (name) => {
    const res = await fetch(fechingBase.character + `/${name}`)
    const byName = await res.json()
    set(() => ({
      character: byName
    }))
  },

}))