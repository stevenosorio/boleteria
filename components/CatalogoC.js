import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'


const CatalogoC = ({ imagen, nombre, fecha, lugar }) => {
  const router = useRouter()

  function handlecard(){
    alert("HAS COMPRADO ESTE EVENTO")
  }

  return (
 
        <div className='grid lg:grid-cols-3 gap-6 w-full h-full mx-auto  px-8'>
        
           <Image src={imagen} alt='imagen' width={300} height={100} className='rounded-lg h-44'/>
           <h3 className='text-lg font-bold ml-2 underline hover:underline-offset-4'>{nombre}</h3>
           <p className='w-[200px] ml-2'>{lugar}</p>
           <h1 className='text-4xl font-semibold ml-2'>{fecha}</h1>
           <div className=''>
           <button onClick={handlecard} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
           COMPRAR
         </button>
         </div>
         </div>
 
  )
}

export default CatalogoC 
