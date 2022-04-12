import React from 'react'
import Link from 'next/link'

import { useSelector } from "react-redux"

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
    NavigationContainerSticky,
} from "../../styles/styled/Navigation"

import { Constraints } from "../../styles/Fichta_CSS"

const Navigation = () => {
    const CartItems = useSelector((state) => state.Cart.cart)
    return (
        <>
            <NavigationContainer>
                <NavigationContainerSticky>
                    <Constraints >
                        <NavigationFlexContainer >
                            <LogoContainer>
                                <Link href="/" passHref={true} >
                                    <a style={{ color: "#000000", fontWeight: "600" }}>
                                        <h1>{TextLogo}</h1>
                                    </a>
                                </Link>

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
                                        <a style={{ color: "#000000", fontWeight: "600" }}>
                                            <li>Cart</li>
                                        </a>
                                    </Link>

                                    <div className="cart__count">
                                        {CartItems.length}
                                    </div>
                                </div>

                            </Cart>
                        </NavigationFlexContainer>
                    </Constraints>
                    <AdditionNavigationWrapper>
                        <Constraints>
                            <div className="lists">
                                <Link href="/shop" passHref={true} >
                                    <a style={{ color: "#000000", fontWeight: "600" }}>
                                        <li>Fichta Products <span>|</span></li>
                                    </a>
                                </Link>

                                <Link href="/" passHref={true} >
                                    <a style={{ color: "#000000", fontWeight: "600" }}>
                                        <li>Customer Service  <span> |</span></li>
                                    </a>
                                </Link>

                                <Link href="/" passHref={true} >
                                    <a style={{ color: "#000000", fontWeight: "600" }}>
                                        <li>Logistics  <span> |</span></li>
                                    </a>
                                </Link>

                                <Link href="/" passHref={true} >
                                    <a style={{ color: "#000000", fontWeight: "600" }}>
                                        <li>Today&apos;s  Deals </li>
                                    </a>
                                </Link>

                            </div>
                        </Constraints>
                    </AdditionNavigationWrapper>
                </NavigationContainerSticky>
            </NavigationContainer>

        </>
    )
}

export default Navigation