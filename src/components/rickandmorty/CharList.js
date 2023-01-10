import { useEffect, useState } from "react"
import CharCard from "./CharCard";
import Loader from "./Loader";

const CharList = () => {

  const [personajes, setPersonajes] = useState([])

  useEffect( () => {
    setTimeout(() => {
        getChars()
    }, 3000);
  }, [])


const getChars = async () => {
    const URL = 'https://rickandmortyapi.com/api/character'
    const response = await fetch( URL )
    const data = await response.json()
    setPersonajes( data.results )
  }

  return (
    <div className="prueba">
        <Loader loading= {personajes.length == 0 } /> {/* para el spinner de loading */ }
        <h1>Lista de personajes</h1>
        { personajes.map( p => <CharCard key={p.id} {...p}/> ) }
    </div>
  )
}
export default CharList