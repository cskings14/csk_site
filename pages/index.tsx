import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Spline from '@splinetool/react-spline';
// import About, Contact, Projects, Title from '../comps/sections/'

const Home = () => {
  return (
    <>
    <Head>
      <title> Christian K </title>
    </Head>


    <div className={styles.container}>
      <h1>Homepage</h1>
      <div className={styles.div}>
      <Spline scene="https://prod.spline.design/1OZ7ne96bkvlkwAj/scene.splinecode" />
      </div>
      <p>BLAH BLAH BLAH</p>
    </div>

    </>
  )
}

export default Home
