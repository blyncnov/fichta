import React from 'react'
import Image from "next/image"

import CategorData from "../../data/Category"

import {
  CardContainer,
  Card,
} from "../../styles/styled/Category"

import { Description, Button, HeadingOne } from "../../styles/Fichta_CSS"

const Category = () => {
  return (
    <>
      <div className="explore">
        <HeadingOne size="2rem" sizeM="1.5rem">Explore Category</HeadingOne>
        <ul>
          <li>Vegetables</li>
          <li>Fruits</li>
          <li>Meat</li>
          <li>Coffee & Teas</li>
        </ul>
      </div>
      <br />
      <br />
      <CardContainer>
        {CategorData.map((category) => {
          return (
            <Card key={category.id}>
              <div className="feature-img">
                <Image src={category.image} alt={category.name} width="100%" height="100%" />
              </div>
              <Description>{category.name}</Description>
              <br />
              <h6>{` ${category.amoutLeft} items`}</h6>
            </Card>
          )
        })}
      </CardContainer>
    </>
  )
}

export default Category