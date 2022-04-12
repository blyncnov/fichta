import { Provider } from 'react-redux'
import Store from "../redux/store";

import '../styles/globals.css'

import Layout from "../components/Layout/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
  )
}

export default MyApp
