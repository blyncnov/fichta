import React from 'react'

import Navigation from '../Navigation'
import Footer from './Footer'

const Index = ({children}) => {
  return (
    <>
      <Navigation />
        {children}
      <Footer/>
    </>
  )
}

export default Index