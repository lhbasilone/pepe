import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'



const ItemsList = () => {

    const [item, setItem] = useState({}) //Hacer como objeto vacio
    const [items, setItems] = useState([])

    useEffect(() => {

        getItemData()
        getItems()

    }, [])
    //al dejar el array vacio solo ocurre en el montaje


    const getItemData = () => {
        const db = getFirestore() //este getFirestore hay que hacer el import manual
        const docRef = doc(db, 'Items', 'OYHXr8gH4pcFnYeGzF9E')
        getDoc(docRef).then(snapshot => {
            // console.log(snapshot.data());
            // console.log(snapshot.id);
            // console.log({ID: snapshot.id, ...snapshot.data()});
            setItem({ ID: snapshot.id, ...snapshot.data() })
        })
    }


    const getItems = async () => {

        const db = getFirestore()
        const collectionRef = collection(db, 'Items')
        const snapshot = await getDocs(collectionRef)
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    }


    return (
        <div className='text-xl m-10'>
            <h1>Listado de productos</h1>

            {item &&

                <>
                    <h2>Producto destacado</h2>
                    <p>{item.title} - stock: {item.stock}</p>
                </>

            }
            {items.map(i => <li key={i.id} >{i.title} - {i.price}</li>)}

        </div>
    )
}

export default ItemsList