import React from 'react'

import { GrDeliver } from "react-icons/gr"
import { AiOutlineFieldTime } from "react-icons/ai"
import { RiSecurePaymentLine } from "react-icons/ri"
import { MdOutlineAssignmentReturn } from "react-icons/md"

import {
  OverAllOfferContainer,
  Container, OffersContainer,
  OffersCard,
} from "../styles/styled/Offer"

import { Description, Constraints, HeadingOne, Typography, Paragraph } from "../styles/Fichta_CSS"

const Offers = () => {
  return (
    <>
      <Constraints>
        <OverAllOfferContainer>
          <Container>
            <HeadingOne size="2rem" sizeM="1.5rem">We Offers</HeadingOne>
            <br />
            <OffersContainer>

              <OffersCard>
                <RiSecurePaymentLine style={{ fontSize: "2rem" }} />
                <br />
                <Typography>Secure Payment</Typography>
                <br />
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing dolor amet ipsum</Paragraph>
              </OffersCard>

              <OffersCard>
                <GrDeliver style={{
                  fontSize: "2rem",
                }} />
                <br />
                <Typography>Free Delivery</Typography>
                <br />
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing dolor amet ipsum</Paragraph>
              </OffersCard>
              <OffersCard>
                <MdOutlineAssignmentReturn style={{
                  fontSize: "2rem",
                }} />
                <br />
                <Typography>30 Days return</Typography>
                <br />
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing dolor amet ipsum</Paragraph>              </OffersCard>
              <OffersCard>
                <AiOutlineFieldTime style={{
                  fontSize: "2rem",

                }} />
                <br />
                <Typography>24/7 Support </Typography>
                <br />
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing dolor amet ipsum</Paragraph>
              </OffersCard>
            </OffersContainer>
          </Container>
        </OverAllOfferContainer>
      </Constraints>
    </>
  )
}

export default Offers