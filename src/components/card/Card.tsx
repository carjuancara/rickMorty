interface params {
  image: string;
  name: string;
  species: string;
  gender: string;
  location: {name:string, url:string};
  status: string
}
export default function Card({ image, name, species, gender, location, status }: params) {
  return (

    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img className="object-cover w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre:{name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Especie:{species}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Genero:{gender}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Lugar:{location.name}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Estado:{status}</p>
      </div>
    </a>

  )
}