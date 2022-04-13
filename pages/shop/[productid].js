import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import dummyProduct from "../../data/dummyProduct"

import IamgeCover from "../../public/logo/shirt.jpg"

import { useDispatch } from "react-redux"
import { AddToCart } from "../../redux/reducers/CartSlice"

import {
  SingleProductContainer, SingleProductDivider,
  Button,
} from "../../styles/Products/SingleProduct"
import {Constraints, Description , Typography, HeadingOne ,Paragraph} from "../../styles/Fichta_CSS"


const SingleProduct = () => {
const dispatch = useDispatch()
  const router = useRouter()

const { productid } = router.query
 console.log(productid);

  const SingleProduct = dummyProduct.filter((product) => {
    if (product.id === parseInt(productid) ) {
      return product;
    } else {
      return "Item not Found";
  }
  })

   console.log(SingleProduct);

  return (
      <>
      <Constraints>
        <SingleProductContainer>
          <SingleProductDivider>
            <Image src={IamgeCover} alt="dummy" layout="responsive" />
          </SingleProductDivider>
           <SingleProductDivider>
            <Description>Vegetables Category</Description> 
            <br/>
            <HeadingOne sizeM="1.3rem">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops </HeadingOne>
            <br />
            <Paragraph>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)
              in the padded sleeve, your everyday</Paragraph>
            <br />
            <HeadingOne size="1.5rem" sizeM="1.2rem">
              $63.46
            </HeadingOne>
            <br/>
            <Button onClick={dispatch(AddToCart(91))}>Add to Cart</Button>
          </SingleProductDivider>
        </SingleProductContainer>
        </Constraints>
      </>
  )
}

export default SingleProduct