import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/homepage'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ken Sidiangco</title>
      </Head>

      <HomePage />
    </>
  )
}

export default Home
