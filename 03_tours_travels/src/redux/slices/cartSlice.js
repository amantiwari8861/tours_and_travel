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
        state.cartItems.push(action.payload);
    //   const item = action.payload;
    //   const existItem = state.cartItems.find((x) => x._id === item._id);
    //   if (existItem) {
    //     state.cartItems = state.cartItems.map((x) =>
    //       x._id === existItem._id ? item : x
    //     );
    //   } else {
    //     state.cartItems = [...state.cartItems, item];
    //   }
    //   state.totalItems = state.cartItems.length;
    //   state.totalPrice = state.cartItems.reduce((acc, item) => acc + item.price, 0);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer