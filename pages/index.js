
import Banner from "../components/Banner";
import Card from "../components/card";
import Footer from "../components/Footer";
import Header from "../components/header";
import { dat } from "../domain/data";
import styles from "../styles/Home.module.css";


export default function Home() {
  const info = dat.eventos;
  return (


    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <section>
        <Banner />
      </section>

      <div className="my-10 grid desktop:grid-cols-4 grid-cols-2 -tablet:grid-cols-1 w-full justify-items-center">
        {info.map(({ img, title, text, date }, index) => {
          return (
            <div key={index} className="my-5">
              <Card imagen={img} nombre={title} lugar={text} fecha={date} />
            </div>
          );
        })}
      </div>

      <footer>
        <Footer />

      </footer>

    </div>
  )
}