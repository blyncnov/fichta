import React from 'react'

// Components for Header
import HeroSection from '../HeroSection/Index'

// styles for Header
import { Container } from '../../styles/Fichta_CSS'

const Header = () => {
    return (
        <>
            <Container bg="#F6F3FC">
                <HeroSection />
            </Container>
        </>
    )
}

export default Header