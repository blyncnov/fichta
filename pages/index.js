import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fichta Store | shop now and save</title>
        <meta name="description" content="Fichta Ecommerce Website Unlimited by blyncnov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>
  )
}
