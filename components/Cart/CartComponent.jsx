import React from 'react'
import Image from "next/image"
import p1 from "../../public/logo/shirt.jpg"

import {
  CartContainer, CartGrid,
  CartGridCard, Button, Splitter,
  CartInfomation, CartImageText,
  CartPricing,
} from "../../styles/Cart/CartMenu"

import { Constraints, Typography } from "../../styles/Fichta_CSS"

const CartComponent = () => {
  const [itemCount, setItemCount] = React.useState(0);

  const IncreaseCountHandler = (count) => {
    setItemCount(itemCount++)
  }

  const DecreaseCountHandler = () => {
    if (itemCount < 1) {
      return itemCount = 0;
    } else {
      setItemCount(itemCount--)
    }
  }

  return (
    <Constraints>
      <Splitter>
        <CartContainer>

          <CartGrid>
            <CartGridCard>
              <Typography>Cart (2) </Typography>
              <br />
              <hr />
              <br />
              <CartInfomation>
                <CartImageText>
                  <div className="img">
                    <Image src={p1} alt="Image" width="100" height="100" />
                  </div>
                  <div className="text">
                    <Typography>Playstation</Typography>
                    <br />
                    <p>TSES Rechargeable Standing Fan- HF-B22U Seller</p>
                  </div>
                </CartImageText>

                <CartPricing>
                  <Typography>$23.00</Typography>
                  <div className="control">
                    <button onClick={DecreaseCountHandler}>-</button>
                    <h4>{itemCount}</h4>
                    <button onClick={IncreaseCountHandler}>+</button>
                  </div>
                </CartPricing>
              </CartInfomation>

            </CartGridCard>
          </CartGrid>

        </CartContainer>

        <CartContainer>
          <Typography>CART SUMMARY</Typography>
          <br />
          <hr />
        </CartContainer>
      </Splitter>
    </Constraints>
  )
}

export default CartComponent