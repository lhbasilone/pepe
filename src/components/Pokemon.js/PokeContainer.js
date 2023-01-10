import { useEffect, useState } from "react"
import PokeList from "./PokeList"

const PokeContainer = () => {



    const [count, setCount] = useState(0)

    const countHandler = () => { setCount(c => c + 1) }


    useEffect(() => {
        console.log("pokecontainer hizo render")
    })
    //al no tener segundo parametro este useEffect sucede cada vez que hay render


return (
    <>
        <div className="text-3xl">PokeContainer</div>
        <button onClick={countHandler}> Contador {count}</button>
        <PokeList />
    </>

)
}

export default PokeContainer