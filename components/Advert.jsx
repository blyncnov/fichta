import React from 'react'
import Link from 'next/link'

import {
    AdvertContainer,
    Container,
} from "../styles/styled/Advert"

import { Description, Constraints, HeadingOne } from "../styles/Fichta_CSS"


const Advert = () => {
    return (
        <>
            <Constraints>
                <AdvertContainer>
                    <Container>
                        <Description>Members get free shipping with no order minimum  *Restrictions apply* .
                        </Description>
                        <Link
                            style={{ color: "white" }}
                            href="/" passHref={true}
                        > Try Free 30-days-trial</Link>
                    </Container>
                </AdvertContainer>
            </Constraints>
        </>
    )
}

export default Advert