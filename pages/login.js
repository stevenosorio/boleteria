import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/header'
import Login from '../components/Login'

export default function Home() {  
  return ( 
    <div className= "bg-slate-300">
        <header>
           <Header/>
        </header>
         <main>
          <Login/> 
         </main>

       
        <footer>
          <Footer/>
        </footer>
      

 
 

    </div>
    
     
 

  )
  
}
