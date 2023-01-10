import { Link } from "react-router-dom"

const CharCard = ( {id, name, species, status, image, gender,} ) => {
  return (
    
      <div className="card w-96 bg-base-100 shadow-xl m-8">
      <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{species}</p>
          <p>{gender}</p>
          <p>{status}</p>
      </div>
      <figure><img src={image} alt="Shoes" /></figure>
      <Link to={`/rick/${id}`} className="neobrut ">detalles del personaje</Link>
      </div>
    
  )
}
export default CharCard