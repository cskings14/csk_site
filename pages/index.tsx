import Head from 'next/head'
import Title from '../comps/sections/Title'
import About from '../comps/sections/About'
import Projects from '../comps/sections/Projects'
import { ProjectData } from '../comps/sections/ProjectData'


const Home = () => {
  return (
    <>
      <Head>
        <title> CK Portfolio </title>
      </Head>
      <Title />
      <About />
      <Projects slides={ProjectData} />
    </>
  )
}

export default Home
