import type { NextPage } from 'next'
import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    </>
  )
}

export default Home
