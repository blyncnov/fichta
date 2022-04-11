import React from 'react'
import Image from "next/image"

import Banner from "../../public/ban.svg"

// Import All HeroSection Styles
import {
    HeroSectionContainer,
    Container, GridContainer,
    Divider, Button
} from '../../styles/styled/HeroSection'

import {
    Constraints, HeadingOne, Paragraph,
    Title, Typography, Description,
} from "../../styles/Fichta_CSS"


const HeroSection = () => {
    return (
        <div>
            <HeroSectionContainer>
                <Constraints>
                    <Container>
                        <GridContainer>
                            <Divider>
                                <HeadingOne>
                                    Meet Shop , Your New Shopping Assistant .
                                </HeadingOne>
                                <br />
                                <Title>
                                    Stock up and get the latest deals on your favorite brands.
                                </Title>
                                <br />
                                <Paragraph>
                                    Stock up on the latest fashion trends and get the latest deals on your favorite brands. Shop at your favorite stores and get the latest deals on your favorite brands.
                                </Paragraph>
                                <br />
                                <Button>Shop Now</Button>
                            </Divider>
                            <Divider>
                                <Image priority src={Banner} alt="banner" layout="responsive" />
                            </Divider>
                        </GridContainer>
                    </Container>
                </Constraints>
            </HeroSectionContainer>
        </div>
    )
}

export default HeroSection