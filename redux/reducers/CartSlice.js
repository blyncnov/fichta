import { createSlice } from '@reduxjs/toolkit'
import dummyProduct from "../../data/dummyProduct"

const initialState = {
    cart: [],
    Quantity: 1,
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
         dummyProduct.filter(product => {
            if (product.id === action.payload) {
                return (
                    console.log(product.name + " " + "Added To Cart Via Reducer"),
                    state.cart.push({
                        id: Math.random(),
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        description: product.desc,
                        itemQuantity: 1
                    })
                );
            } else {
                return "No item in cart"
            }
        })
        },
        IncreaseProductQuantity: (state, action) => {
            state.cart.filter(product => {
                if (product.id === action.payload) {
                    return (
                        console.log(product.name + " " + "has been increased to" + " " + product.itemQuantity++),
                        product.price = product.price * product.price
                )
            } else {
                return "No item in cart"
            }
        })
        },
         DecreaseProductQuantity: (state, action) => {
            state.cart.filter(product => {
                if (product.id === action.payload) {
                    return (
                        console.log(product.name + " " + "has been increased to" + " " + product.itemQuantity--),
                        product.price = product.price - product.price
                )
            } else {
                return "No item in cart"
            }
        })
        },
    }
})

// Action creators are generated for each case reducer function
export const { AddToCart, IncreaseProductQuantity, DecreaseProductQuantity} = CartSlice.actions

export default CartSlice.reducer