import React from 'react'
import Image from "next/image"

import CategorData from "../../data/Category"

import {
  CardContainer,
  Card, Button
} from "../../styles/styled/Category"

import { Description, HeadingOne } from "../../styles/Fichta_CSS"

const Category = () => {
  return (
    <>
      <div className="explore">
        <HeadingOne size="2rem" sizeM="1.5rem">Explore Category</HeadingOne>
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
              <br />
              <Button><h5>View Category</h5></Button>
            </Card>
          )
        })}
      </CardContainer>
    </>
  )
}

export default Category