import React from 'react'

import Navigation from "../Navigation"
import Footer from './Footer'

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default LayoutComponent