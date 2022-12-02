import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/header'
import Register from '../components/Register'




export default function Home() {  
  return ( 
    <div className= "bg-slate-300">
        <header>
           <Header/>
        </header>
         <main>
          <Register/> 
         </main>

       
        <footer>
          <Footer/>
        </footer>
      

 
 

    </div>
    
     
 

  )
  
}