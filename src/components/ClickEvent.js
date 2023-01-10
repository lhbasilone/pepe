import React from 'react'



const ClickEvent = () => {


  const onClickHandler = (event) => {
    console.log("click");
  }

  const onChangeInput = ( event ) => { 
    console.log('Cambio: ', event.key);
    const vocales = ['a', 'e', 'i', 'o', 'u']
    if(vocales.includes(event.key.toLowerCase())){
      event.preventDefault()
    }
}


  return (
    <div className='m-10'>
        <button onClick={onClickHandler} className='neobrut' >Da click Aqui</button>
        <h1 className='text-xl my-5'>Input que no permite vocales</h1>
        <input onKeyDown={onChangeInput} className=' p-2 text-xl drop-shadow-lg border-2 border-sky-500' type='text'/>
    </div>
  )
}

export default ClickEvent