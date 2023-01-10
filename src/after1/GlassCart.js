
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore"
import { useCart } from "../context/cartContext"




const GlassCart = () => {

  const { items, clearCart } = useCart()

  // Con return
  // if (items.length == 0) {
  //   return <h1 className="text-xl"> Agrega items a tu Carrito</h1>
  // }


  const makeOrder = () => {
    const user = { name: "Lucas", phone: 11223344, email: "lucas@gmail.com", }
    const order = {
      buyer: user,
      items: items,
    }
    console.log("Levantando la orden: ", order);
    saveOrder(order)
  }


  const saveOrder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    const { id } = await addDoc(orderCollection, order)
    console.log('Nueva orden: ', id);
  }

  const editOrder = (id) => {
    const db = getFirestore()
    const orderDoc = doc(db, 'orders', id)
    updateDoc(orderDoc,
      {
        buyer:
        {
          name: "pepe",
          phone: 55667788,
          email: "pepes@gmail.com",
        },
        total: 500
      //{total:5000} Esta agregaria esta categoria
      }).then(res => { console.log(res) })
  }


  const editOrderHandler = () => {
    editOrder ( 'vRGBBH573JQrrm9HT2wC' )
  }

  const makeBatch = () => { 
    const db = getFirestore()

    const order1 = doc(db, 'orders', 'uZGUV8lMPeIKX6eIkSug')
    const order2 = doc(db, 'orders', 'vRGBBH573JQrrm9HT2wC')

    const batch = writeBatch ( db )

    batch.update(order1, {total: 77})
    batch.update(order2, {total: 40})

    console.log('se actualizo')

    batch.commit()
  }




  return (


    <div className="m-10 text-xl">
      <div>GlassCart</div>
      {/*con && ---> items.length == 0 && <h1 className="text-xl"> Agrega items a tu Carrito</h1>*/}

      {items.length === 0 ?
        <h1 className="text-xl m-10"> Agrega items a tu Carrito</h1>
        :
        <h1>Estos son tus items! </h1>
      }

      <div>{items.map(i => <li key={i}>{i}</li>)}</div>
      <button className="btn neobrut" onClick={clearCart}> Vaciar Carrito </button>
      <button className="btn neobrut" onClick={makeOrder}> Comprar </button>
      <button className="btn neobrut" onClick={editOrderHandler}> Actualizar </button>
      <button className="btn neobrut" onClick={makeBatch}> batch </button>
    </div>
  )
}

export default GlassCart