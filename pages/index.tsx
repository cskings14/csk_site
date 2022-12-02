import Head from 'next/head'
import Title from '../comps/sections/Title'
import About from '../comps/sections/About'
import Projects from '../comps/sections/Projects'


const Home = () => {
  return (
    <>
      <Head>
        <title> CK Portfolio </title>
      </Head>
      <Title />
      <About />
      {/* <Projects /> */}
    </>
  )
}

export default Home
