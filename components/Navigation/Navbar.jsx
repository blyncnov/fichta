import React from 'react'
import Link from 'next/link'

import { HiOutlineShoppingCart } from "react-icons/hi"
import { AiOutlineUserAdd } from "react-icons/ai"
import { GoSearch } from 'react-icons/go'
import { RiFileList3Line } from 'react-icons/ri'

//Import Navigation data
import { TextLogo } from "../../data/Navigation"

// Styles for Navigation
import {
    NavigationContainer,
    NavigationFlexContainer,
    Search, Cart, LogoContainer,
    AdditionNavigationWrapper,
} from "../../styles/styled/Navigation"

import { Constraints } from "../../styles/Fichta_CSS"



const Navigation = () => {

    return (
        <>
            <NavigationContainer>
                <Constraints >
                    <NavigationFlexContainer >
                        <LogoContainer>
                            <Link href="/" passHref={true} >
                                <a style={{ color: "#000000" }}>
                                    <h1>{TextLogo}</h1>
                                </a>
                            </Link>
                            {/* <Image src={Logo} alt="Logo" layout="responsive" /> */}
                        </LogoContainer>
                        <Search mobile>
                            <input type="text"
                                placeholder='Enter an item name to search e.g blyncnov'
                                name="search" id="search" />
                            <button>
                                <GoSearch style={{ fontSize: "1.5rem" }} />
                            </button>
                        </Search>
                        <Cart>
                            <div className="cart__lists mobile__hide">
                                <AiOutlineUserAdd style={{ cursor: "pointer", color: "black", fontWeight: "bold", fontSize: "1.5rem" }} />
                                <li>Account</li>
                            </div>

                            <div className="cart__lists mobile__hide">
                                <RiFileList3Line style={{ cursor: "pointer", color: "black", fontWeight: "bold", fontSize: "1.5rem" }} />
                                <li>Wishlist</li>
                            </div>

                            <div className="cart__lists" >
                                <Link href="/cart">
                                    <a><HiOutlineShoppingCart style={{ cursor: "pointer", color: "black", fontWeight: "bold", fontSize: "1.5rem" }} /></a>
                                </Link>
                                <Link href="/cart">
                                    <a style={{ cursor: "pointer", color: "#000000" }}>Cart</a>
                                </Link>

                                <div className="cart__count">
                                    1
                                </div>
                            </div>

                        </Cart>
                    </NavigationFlexContainer>
                </Constraints>
                <AdditionNavigationWrapper>
                    <Constraints>
                        <div className="lists">
                            <li>Sell on Fichta</li> <span>|</span>
                            <li>Logistics</li> <span>|</span>
                            <li>Customer Service</li> <span>|</span>
                            <li>Today&apos;s  Deals</li>

                        </div>
                    </Constraints>
                </AdditionNavigationWrapper>
            </NavigationContainer>
        </>
    )
}

export default Navigation