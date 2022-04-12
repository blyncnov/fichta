import React from 'react'
import Image from "next/image"

import { useDispatch, useSelector } from "react-redux"
import { IncreaseProductQuantity, DecreaseProductQuantity } from "../../redux/reducers/CartSlice"

import {
  CartContainer, CartGrid,
  CartGridCard, Splitter,
  CartInfomation, CartImageText,
  CartPricing,
} from "../../styles/Cart/CartMenu"

import { Constraints, Typography, Paragraph } from "../../styles/Fichta_CSS"

const CartComponent = () => {
  const dispatch = useDispatch();

  const CartItems = useSelector((state) => state.Cart.cart)
  const Quantity = useSelector((state) => state.Cart.Quantity)


  return (
    <Constraints>
      <Splitter>
        <CartContainer>

          <CartGrid>
            <CartGridCard>
              <Typography>
                {` Cart (${CartItems.length})`}
              </Typography>

            </CartGridCard>
          </CartGrid>

          {CartItems.map((cart) => {
            return (
              <div key={cart.id}>
                <CartGrid>
                  <CartGridCard>

                    <hr />
                    <br />
                    <CartInfomation>
                      <CartImageText>
                        <div className="img">
                          <Image src={cart.image} alt="Image" width="100" height="100" />
                        </div>
                        <div className="text">
                          <Typography>{cart.name}</Typography>
                          <br />
                          <Paragraph sizeM="12px" size="13px" style={{ fontSize: "12px", fontweight: "400" }}>{cart.description}</Paragraph>
                        </div>
                      </CartImageText>

                      <CartPricing>
                        <Typography color="#C5006F">{`$${cart.price}.00`}</Typography>
                        <div className="control">
                          <button onClick={() => dispatch(DecreaseProductQuantity(cart.id))}>-</button>
                          <h4>{cart.itemQuantity}</h4>
                          <button onClick={() => dispatch(IncreaseProductQuantity(cart.id))}>+</button>
                        </div>
                      </CartPricing>
                    </CartInfomation>

                  </CartGridCard>
                </CartGrid>
              </div>
            )
          })}

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