import { createSlice } from '@reduxjs/toolkit'
import dummyProduct from "../../data/dummyProduct"

const initialState = {
    cart: [],
    count: 0
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
                        description: product.desc
                              
                    })
                );
            } else {
                return "No item in cart"
            }
        })
        },
    }
})

// Action creators are generated for each case reducer function
export const { AddToCart} = CartSlice.actions

export default CartSlice.reducer