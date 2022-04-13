import React from 'react'
import Link from 'next/link'

import Category from "../../data/Category"

import { FooterContainer, FooterGridContainer, FooterGridCard } from "../../styles/styled/Footer"
import { Constraints, Description, Paragraph, Typography, Title, HeadingOne } from "../../styles/Fichta_CSS"


const Footer = () => {
  return (
    <FooterContainer>
      <Constraints>
        <FooterGridContainer>

          <FooterGridCard>

            <HeadingOne size="2rem" sizeM="1.5rem">Fichta</HeadingOne>
            <br />
            <Description>  Best E-commerce ipsum dolor sit amet, consectetur adipisicing elit.
              Modi cumque tenetur inventore veniam, hic vel ipsa
              necessitatibus designed by blyncnov! </Description>
          </FooterGridCard>

          <FooterGridCard>
            <HeadingOne size="1.5rem" sizeM="1.3rem">Categories</HeadingOne>
            <br />
            {Category.map((category) => {
              return (
                <Link passHref={true} href={`/${category.name}`} key={category.id}>
                  <p style={{ margin: ".5em", cursor: "pointer" }} > {category.name}</p>
                </Link>
              )
            })}
          </FooterGridCard>


          <FooterGridCard>
            <HeadingOne size="1.5rem" sizeM="1.3rem">Contact Us</HeadingOne>
            <br />
            <Paragraph color="#fff">183 Agbede St. Funaab gate, Funaab, Alabata</Paragraph>
            <br />
            <Paragraph color="#fff">bholuwatife00@gmail.com</Paragraph>
            <br />
            <li>+234 (814) 9055 068</li>
            <br />
            <Paragraph color="#fff">	Monday — Friday 8:00am - 5:00pm</Paragraph>
          </FooterGridCard>

        </FooterGridContainer>
      </Constraints>
    </FooterContainer>
  )
}

export default Footer