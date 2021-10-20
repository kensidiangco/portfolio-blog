import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navigation'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ken Sidiangco</title>
      </Head>
      <Navigation />
      
      <div className="containter mx-auto bg-black">
        <h1 className="text-2xl text-white">Portfolio</h1>
      </div>
    </>
  )
}

export default Home
