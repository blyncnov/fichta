import '../styles/globals.css'

// import Navigation from "../components/Navigation/Navbar"
// import Footer from "../components/Layout/Footer.jsx"

import Layout from "../components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* <Navigation/> */}
        <Component {...pageProps} />
        {/* <Footer/> */}
    </Layout>
  )
}

export default MyApp
