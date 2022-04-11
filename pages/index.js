import Head from 'next/head'

import Header from '../components/Header'
import Categories from '../components/Categories/Index'
import Advert from '../components/Advert'
import FeatureProduct from '../components/Products/FeatureProduct'
import Offer from '../components/Offers'
import Newsletter from '../components/Newsletter'


export default function Home() {  
  return (
    <>
      <Head>
        <title>Fichta Store | shop now and save</title>
        <meta name="description" content="Fichta Ecommerce Website Unlimited by blyncnov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories />
      <Advert />
      <FeatureProduct />
      <Offer />
      <Newsletter/>
    </>
  )
}
