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
                    if (state.cart.find(item => item.id === action.payload)) {
                      alert("hey i exist")
                    } else {
                        alert(product.name + " " + "Added To Cart ")
                        state.cart.push({
                        id: Math.random(),
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        description: product.desc,
                        itemQuantity: state.Quantity
                    })
                    }   
            } else {
                return "No item in cart"
            }
        })
        },
        IncreaseProductQuantity: (state, action) => {
            state.cart.filter(product => {
                if (product.id === action.payload) {
                    return (
                        console.log(state.Quantity),
                        state.Quantity++,
                        console.log(state.Quantity + " " + "New price"),
                        product.price = product.price 
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
                        state.Quantity = state.Quantity - 1,
                        console.log(state.Quantity),
                        product.price = product.price - state.Quantity
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