import React from 'react'
import Image from "next/image"

import { BsBagPlus } from "react-icons/bs"

import DummyProduct from "../../data/dummyProduct"

import { useDispatch } from "react-redux"
import { AddToCart } from "../../redux/reducers/CartSlice"

import {
    CardContainer,
    Card, Buy, CategoryContainer
} from "../../styles/styled/Products"

import { Description, Constraints } from "../../styles/Fichta_CSS"

const Product = () => {

    const dispatch = useDispatch()

    return (
        <>
            <CategoryContainer>
                <Constraints>
                    <CardContainer>
                        {DummyProduct.map((product) => {
                            return (
                                <Card key={product.id}>
                                    <div className="feature-img">
                                        <Image src={product.image} alt={product.name} width="100%" height="100%" />
                                    </div>
                                    <div className="sp">
                                        <Description>{product.name}</Description>
                                        <br />
                                        <h6>{` ${product.desc} items`}</h6>
                                    </div>
                                    <br />
                                    <Buy>
                                        <h5>{`$${product.price}`}</h5>
                                        <div onClick={() => dispatch(AddToCart(product.id))}>
                                            <BsBagPlus style={{fontSize: "1.2em"}} />
                                        </div>
                                    </Buy>
                                </Card>
                            )
                        })}
                    </CardContainer>
                </Constraints>
            </CategoryContainer>
        </>
    )
}

export default Product



    // < div className = "explore" >
    //             <HeadingOne size="2rem" sizeM="1.5rem">Explore Category</HeadingOne>
    //             <ul>
    //                 <li>Vegetables</li>
    //                 <li>Fruits</li>
    //                 <li>Meat</li>
    //                 <li>Coffee & Teas</li>
    //             </ul>
    //         </ >
    //         <br />
    //         <br />