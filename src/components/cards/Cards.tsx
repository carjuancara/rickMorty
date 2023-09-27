import { useEffect } from 'react';
import { useRyMstate } from '../../store/store.ts';
import Card from '../card/Card.tsx';



export default function Cards() {
  const { character,getAllCharacter } = useRyMstate()
  useEffect(() => {
    getAllCharacter()
  }, [getAllCharacter])
  return (
    <div className='container mx-auto my-auto py-1 px-2 sm:px-2 lg:px-2 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {character?.map(c => <Card key={c.id} image={c.image} name={c.name} species={c.species} gender={c.gender} location={c.location} status={c.status}/>)}
      </div>
      
    </div>

  )
}