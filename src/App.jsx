import { useState } from 'react'
import Header from "./components/Header"
import Banner from "./components/Banner"
import styles from './components/App.module.css'
import Search from './components/Search'
import Place from './components/Place'
import Map from './components/Map'
import Interesting from './components/Interesting'
import Footer from './components/Footer'
function App() {
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

export default App
