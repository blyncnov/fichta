import React from 'react'


import {
    NewsletterContainer,
    Container, OffersContainer,
    OffersCard,
} from "../styles/styled/Newsletter"

import {
    Description, Constraints, HeadingOne,
    Typography, Paragraph
} from "../styles/Fichta_CSS"

const Newsletter = () => {
    return (
        <>
            <NewsletterContainer>
                <Constraints>
                    <Container>
                        <HeadingOne color="white" size="2rem" sizeM="1.5rem">Subscribe To Newsletter</HeadingOne>
                        <Typography>And get $20 coupon for free shopping</Typography>
                        <div className="newsInput">
                            <input type="text" placeholder="blyncnov@fichta.com" />
                            <button type="submit">Subscribe</button>
                        </div>
                    </Container>
                </Constraints>
            </NewsletterContainer>

        </>
    )
}

export default Newsletter