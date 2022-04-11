import '../styles/globals.css'

import Navigation from "../components/Navigation"
import Footer from "../components/Footer.jsx"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}

export default MyApp
