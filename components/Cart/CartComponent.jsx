import React from 'react'

import {
  CartContainer, CartGrid,
  CartGridCard, Button
} from "../../styles/Cart/CartMenu"
import { Constraints } from "../../styles/Fichta_CSS"

const CartComponent = () => {
  return (
    <>
      <Constraints>
        <CartContainer>
          <CartGrid>
            <CartGridCard>
              <h1>cartComponent</h1>
              <h6>i am cart item dummas</h6>
            </CartGridCard>
          </CartGrid>
        </CartContainer>

      </Constraints>
    </>
  )
}

export default CartComponent