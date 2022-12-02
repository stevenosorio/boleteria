import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/header'
import RegisterV from '../components/registerV'




export default function Home() {  
  return ( 
    <div className= "bg-slate-300">
        <header>
           <Header/>
        </header>
         <main>
          <RegisterV/> 
         </main>

       
        <footer>
          <Footer/>
        </footer>
      

 
 

    </div>
    
     
 

  )
  
}