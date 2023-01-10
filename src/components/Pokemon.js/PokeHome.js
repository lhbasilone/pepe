import { Link } from "react-router-dom"


const PokeHome = () => {
  return (
    <div className="m-10">
    <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">PokeHome</div>


    <Link to='/pokemon/list' className="text-xl  font-mono btn neobrut">Ver todos los pokemons</Link>
    </div>
  )
}

export default PokeHome