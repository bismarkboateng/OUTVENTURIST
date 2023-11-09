import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    quantity: 0,
    total: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, { payload }) => {
            const existingItem = state.cartItems.find(item => item.id === payload.productDetail.id)
            let totalQuantity = 0

            if (existingItem) {
                existingItem.quantity += payload.itemQuantity
            } else {
                const tempProduct = { ...payload.productDetail, quantity: 1}
                state.cartItems.push(tempProduct)
            }

            // getting total quantity
            state.cartItems.forEach(cartItem => {
                totalQuantity += cartItem.quantity
            })
            state.quantity = totalQuantity
        },

        removeFromCart: (state, action) => {
            let tempItem 
            tempItem = state.cartItems.find(item => item.id === action.payload.id)
            if (state.quantity == 0) {
                state.cartItems = state.cartItems.filter(item => item.id !== tempItem.id)
                // tempItem = []
            } else {
                state.quantity--
                tempItem.quantity > 0 && tempItem.quantity--
            }
        },
        updateTotal: (state) => {
            let total = 0

            state.cartItems.forEach(item => {
                total += +item.quantity * +item.price
            })
            state.total = total
        }
    }
})


export const { addToCart, removeFromCart, updateTotal } = cartSlice.actions
export default cartSlice.reducer