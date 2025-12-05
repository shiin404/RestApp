
import Header from "./Header"
import Banner from "./Banner"
import styles from './App.module.css'
import Search from './Search'
import Place from './Place'
import Map from './Map'
import Interesting from './Interesting'
import Footer from './Footer'
export default function Home() {
  return(
    <div className={styles.page}>
      <Header />
      <Banner />
      <Search />
      <Place />
      <Map />
      <Interesting />
      <Footer />
    </div>
  )
}


