import React from 'react'
import Image from "next/image"

import DummyProduct from "../../data/dummyProduct"

import {
    CardContainer, SectionTitle,
    Card, Buy
} from "../../styles/styled/Products"

import { Description, HeadingOne, Constraints } from "../../styles/Fichta_CSS"

const Product = () => {
    return (
        <>
            <Constraints>
                <SectionTitle>
                    <HeadingOne size="2rem" sizeM="1.5rem">Available Products</HeadingOne>
                    <ul>
                        <li>See More ...</li>
                    </ul>
                </SectionTitle>
                <CardContainer>
                    {DummyProduct.map((product) => {
                        return (
                            <Card key={product.id}>
                                <div className="feature-img">
                                    <Image src={product.image} alt={product.name} width="100%" height="100%" />
                                </div>
                                <Description>{product.name}</Description>
                                <br />
                                <h6>{` ${product.amoutLeft} items`}</h6>
                                <br />
                                <Buy>
                                    <h5>{`$${product.price}`}</h5>
                                    <><h5>Buy Now</h5></>
                                </Buy>
                            </Card>
                        )
                    })}
                </CardContainer>
            </Constraints>
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