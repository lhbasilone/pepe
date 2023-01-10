import { useEffect } from "react"

const PokeCard = ({ name }) => {

  useEffect(() => {
    console.log("pokecontainer hizo render")
  })
  
  
  return (
    <div className=" m-1 capitalize text-l font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-pink-600">{name}</div>
  )
}

export default PokeCard