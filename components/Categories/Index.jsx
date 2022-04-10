import React from 'react'

// category display
import Category from './Category'

import { Container, CategoryContainer } from "../../styles/styled/Category"
import { Constraints } from "../../styles/Fichta_CSS"

const Index = () => {
  return (
    <>
      <CategoryContainer>
        <Constraints>
          <Container>
            <Category />
          </Container>
        </Constraints>
      </CategoryContainer>
    </>
  )
}

export default Index