import Image from 'next/image'
import React from 'react'
import cardList from '../domain/data'
 
const Compra = ({ ...props }) => {
  return (
 
        <div className='grid lg:grid-cols-3 gap-6 w-full h-full mx-auto  px-8'>
        
      
         <div className='shadow-lg w-72 h-80'>
           <Image src={props.img} alt='imagen' width={300} height={100} className='rounded-lg h-44'/>
           <h3 className='text-lg font-bold ml-2 underline hover:underline-offset-4'>{props.title}</h3>
           <p className='w-[200px] ml-2'>{props.text}</p>
           <h1 className='text-4xl font-semibold ml-2'>{props.date}</h1>
           <div className=''>
           <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
           COMPRAR
         </button>
         </div>
         </div>
  
       
 
       
       </div>
 
  )
}

export default Compra
