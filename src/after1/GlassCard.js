import { Link } from "react-router-dom"

export const GlassCard = ( {id, title, description, price, stock} ) => {
  return (
    <div className="m-5 bg-gray-400 p-5">
        <div>{title}</div>
        <div>{description}</div>
        <div>{price}</div>
        <div>{stock}</div>
        <Link to={`/glass/${id}`} className="btn">Ver detalle</Link>
        <Link to={`/rick`} className="btn">a rym</Link>
        <Link to={`/pokemon`} className="btn">pokemon</Link>
    </div>
  )
}