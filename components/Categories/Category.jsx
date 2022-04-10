import React from 'react'
import Image from "next/image"

import P1 from "../../public/category/1.svg"
import P2 from "../../public/category/2.svg"
import P3 from "../../public/category/3.svg"
import P4 from "../../public/category/4.svg"
import P5 from "../../public/category/5.svg"

import {
  CardContainer,
  Card, GridItem,

} from "../../styles/styled/Category"

import { Description, Button, HeadingOne } from "../../styles/Fichta_CSS"

const Category = () => {
  return (
    <>
      <div className="explore">
        <HeadingOne>Explore Category</HeadingOne>
        <ul>
          <li>Vegetables</li>
          <li>Fruits</li>
          <li>Meat</li>
          <li>Coffee</li>
        </ul>
      </div>
      <br />
      <br />
      <CardContainer>
        <Card >
          <div className="feature-img">
            <Image src={P1} alt="p1" width="100%" height="100%" />
          </div>
          <Description>Peach</Description>
          <br />
          <h6>25 items</h6>
        </Card>

        <Card >
          <div className="feature-img">
            <Image src={P2} alt="p1" width="100%" height="100%" />
          </div>
          <Description>Vegetables</Description>
          <br />
          <h6>25 items</h6>
        </Card>

        <Card >
          <div className="feature-img">
            <Image src={P3} alt="p1" width="100%" height="100%" />
          </div>
          <Description>Strawberry</Description>
          <br />
          <h6>25 items</h6>
        </Card>

        <Card >
          <div className="feature-img">
            <Image src={P4} alt="p1" width="100%" height="100%" />
          </div>
          <Description>Apple</Description>
          <br />
          <h6>25 items</h6>
        </Card>

        <Card >
          <div className="feature-img">
            <Image src={P5} alt="p1" width="100%" height="100%" />
          </div>
          <Description>Orange</Description>
          <br />
          <h6>25 items</h6>
        </Card>
      </CardContainer>
    </>
  )
}

export default Category