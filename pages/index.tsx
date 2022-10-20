import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>BLAH BLAH BLAH</p>
      <Footer />
    </div>
  )
}

export default Home
