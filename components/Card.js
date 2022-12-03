import Image from 'next/image'
import React from 'react'
import {data} from '../domain/data'
import { useRouter } from 'next/router' 

const Card = ({ ...props }) => {
  const router = useRouter()
 

  function handlecard(){
    router.push('/login')
  } 
  return (
 
        <div className='grid lg:grid-cols-3 gap-6 w-full h-full mx-auto  px-8'>
        
        {data.map(card=>(
         <>
         <div className='shadow-lg w-72 h-80'>
 
           <h3 className='text-lg font-bold ml-2 underline hover:underline-offset-4'>{card.title}</h3>
           <p className='w-[200px] ml-2'>{card.text}</p>
           <h1 className='text-4xl font-semibold ml-2'>{card.date}</h1>
           <div className=''>
           <button onClick={handlecard} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
           COMPRAR
         </button>
         </div>
         </div>
         </>
        )) }
 
       
       </div>
 
  )
}

export default Card