// import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <>

    <Head>
      <title> CK Portfolio | Home </title>
      
    </Head>
    <div className={styles.container}>
      {/* <Navbar /> */}
      <h1>Homepage</h1>
      <div className={styles.div}>
      <Spline scene="https://prod.spline.design/1OZ7ne96bkvlkwAj/scene.splinecode" />
      </div>
      <p>BLAH BLAH BLAH</p>

      {/* <Footer /> */}
    </div>

    </>
  )
}

export default Home
