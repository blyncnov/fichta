import React from 'react'

// Components for Header
import HeroSection from '../HeroSection/Index'
import Navigation from '../Navigation/Index'

// styles for Header
import { Container } from '../../styles/Fichta_CSS'


const Header = () => {
    return (
        <div>
            <Container bg="#F6F3FC">
                <>
                    <Navigation />
                    <HeroSection />
                </>
            </Container>

        </div>
    )
}

export default Header