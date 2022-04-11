import React from 'react'

import Navigation from '../Navigation/index'
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