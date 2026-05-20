import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems:[] ,
  totalItems:0,
  totalPrice:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        state.cartItems.push(action.payload);},
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer