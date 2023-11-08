import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    quantity: 0,
    cartItems: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // get the product id
            // check if it already exists in the cart Item
            // increment the quantity if so,
            // else add to the cart
        },

        removeFromCart: (state, action) => {
            // remove from cart logic
        },
    }
})


export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer