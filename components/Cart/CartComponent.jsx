import React from 'react'
import Image from "next/image"
import p1 from "../../public/logo/shirt.jpg"

import {
  CartContainer, CartGrid,
  CartGridCard, Button, Splitter,
  CartInfomation, CartImageText,
  CartPricing,
} from "../../styles/Cart/CartMenu"

import { Constraints, Typography, Paragraph } from "../../styles/Fichta_CSS"

const CartComponent = () => {
  const [itemCount, setItemCount] = React.useState(1);
  const [singlePrice, setSinglePrice] = React.useState(1);

  const IncreaseCountHandler = (count) => {
    // setItemCount(itemCount++)
    setItemCount(itemCount => itemCount + 1)
    setSinglePrice(prevSinglePrice => prevSinglePrice * itemCount)
  }

  const DecreaseCountHandler = () => {
    if (itemCount === 1) {
      return itemCount = singlePrice;
    } else if (itemCount > 0) {
      // setItemCount(itemCount--)
      setItemCount(itemCount => itemCount - 1)
      setSinglePrice(singlePrice - singlePrice)
    } else {
      return itemCount = 0;
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
                    <Typography>Summer Shirt For Men</Typography>
                    <br />
                    <Paragraph sizeM="12px" size="13px" style={{ fontSize: "12px", fontweight: "400" }}>TSES Rechargeable Standing Fan- HF-B22U Seller</Paragraph>
                  </div>
                </CartImageText>

                <CartPricing>
                  <Typography color="#C5006F">{`$${singlePrice}.00`}</Typography>
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