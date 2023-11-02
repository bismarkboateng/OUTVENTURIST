import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    quantity: 0,
    cartItem: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // add to cart logic
        },

        removeFromCart: (state, action) => {
            // remove from cart logic
        },
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer