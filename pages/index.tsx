import Head from 'next/head'
import Title from '../comps/sections/Title'
import About from '../comps/sections/About'


const Home = () => {
  return (
    <>
      <Head>
        <title> CK Portfolio </title>
      </Head>
      <Title />
      <About />
    </>
  )
}

export default Home
