import React from 'react'

// category display
import Category from './Category'

import { Container, CategoryContainer } from "../../styles/styled/Category"
import { Constraints } from "../../styles/Fichta_CSS"

const Categories = () => {
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

export default Categories