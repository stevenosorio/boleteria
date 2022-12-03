
import styles from '../styles/Home.module.css'
import Crear from '../components/Crear'
import Footer from '../components/Footer'
import Header from '../components/header'
export default function Home() {
   return (

      <div>

         <header>
              <Header/>
         </header>



         <div className={styles.container}>
         <Crear/>
         </div>



         <footer>
            <Footer/>
         </footer>
      </div>
 
 
 
   )
 }
 