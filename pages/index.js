import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import cardList from './data'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className='w-full pb-20'>
        <h1 className='text-black w-full h-8 text-5xl underline hover:underline-offset-4 '>TODOS LOS EVENTOS</h1>
      </div>

      <main className='grid lg:grid-cols-3 gap-6 w-full h-full mx-auto  px-8'>
        
       {cardList.map(card=>(
        <>
        <div className='shadow-lg w-72 h-80'>
          <Image src={card.img} alt='imagen' width={300} height={100} className='rounded-lg h-44'/>
          <h3 className='text-lg font-bold ml-2 underline hover:underline-offset-4'>{card.title}</h3>
          <p className='w-[200px] ml-2'>{card.text}</p>
          <h1 className='text-4xl font-semibold ml-2'>{card.date}</h1>
          <div className=''>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
          COMPRAR
        </button>
        </div>
        </div>
        </>
       )) }

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
