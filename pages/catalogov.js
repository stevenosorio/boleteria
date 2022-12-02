import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/HeaderV'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (


    <div className={styles.container}>
      <header>
        <Header/>
      </header>
      <section>
        <Banner />
      </section>

      <main>

        <Card />
      </main>

      <footer>
        <Footer />

      </footer>

    </div>
  )
}