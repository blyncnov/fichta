import React from 'react'
import Image from "next/image"

import { useDispatch, useSelector } from "react-redux"
import { IncreaseProductQuantity, DecreaseProductQuantity } from "../../redux/reducers/CartSlice"

import {
  CartContainer, CartGrid,
  CartGridCard, Splitter,
  CartInfomation, CartImageText,
  CartPricing, Button, SummaryInformation,
} from "../../styles/Cart/CartMenu"

import { Constraints, Typography, Paragraph } from "../../styles/Fichta_CSS"

const CartComponent = () => {
  const dispatch = useDispatch();

  const CartItems = useSelector((state) => state.Cart.cart)
  const Quantity = useSelector((state) => state.Cart.Quantity)
  // const TotalSingleprice = useSelector((state) => state.Cart.TotalSinglePrice)

  return (
    <Constraints>
      <Splitter>
        <CartContainer>
          {
            CartItems.length === 0 ? (
              <>
                <Constraints>
                  <h1>
                    Hey Dummy!! Your Cart is empty
                  </h1>
                </Constraints>
              </>
            ) : (
              <>
                <CartGridCard>
                  <Typography>
                    {` Cart (${CartItems.length})`}
                  </Typography>
                </CartGridCard>
                {
                  CartItems.map((cart) => {
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
                                  <h4>{Quantity}</h4>
                                  <button onClick={() => dispatch(IncreaseProductQuantity(cart.id))}>+</button>
                                </div>
                              </CartPricing>
                            </CartInfomation>

                          </CartGridCard>
                        </CartGrid>
                      </div>
                    )
                  })
                }
              </>
            )
          }
        </CartContainer>

        <CartContainer>
          <Typography>CART SUMMARY</Typography>
          <br />
          <hr />
          <SummaryInformation>
            <div className="pricebox">
              <h4>Sub Total </h4>
              <h4>$60.70</h4>
            </div>
            <div className="pricebox">
              <h4>Shipping </h4>
              <h4>FREE</h4>
            </div>
            <div className="pricebox">
              <h4>Estimated Taxes </h4>
              <h4>$9.11</h4>
            </div>
            <div className="pricebox">
              <h4>Cart Total </h4>
              <h4>$69.70</h4>
            </div>
            <br />
            <div className="btnWrapper">
              <Button>Proceed To Checkout</Button>
              <p>Secure Checkout
                shipping is always safe and secure. </p>
            </div>
          </SummaryInformation>
        </CartContainer>
      </Splitter>
    </Constraints>
  )
}

export default CartComponent