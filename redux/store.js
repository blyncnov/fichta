import { configureStore } from '@reduxjs/toolkit'
import CartReducer from "../redux/reducers/CartSlice"

export const store = configureStore({
    reducer: {
      Cart: CartReducer,
  },
})

export default store