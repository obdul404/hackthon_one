import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { Turret_Road } from "next/font/google";
import { Image as IImage } from 'sanity'

interface ICartItem {
    _id: string,
    title: string,
    description: string,
    image: IImage,
    price: number,
    quantity: number,
    slug: {
        current: "string"
    }
    category: {
        name: string
    }
}

interface cartState {
    items: ICartItem[]
    subtotal: number
    count: number
}

const initialState:cartState = {
    items:[],
    subtotal:0,
    count:0
}


export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state,action) => {
            state.subtotal = 0
            state.count = 0
            const _id = action.payload._id
            let isNew = true;
            state.items.map((item) => {
                if(item._id == _id) {
                    isNew = false
                    item.quantity += 1
                    return item
                }
            })
            if(isNew) {
                action.payload.quantity = 1
                state.items.push(action.payload)
            }

            state.items.map((item) => {
                state.subtotal += item.quantity * item.price
                state.count += item.quantity
            })
        },
        removeFromCart: (state, action) => {
            state.subtotal = 0
            state.count = 0
            state.items = state.items.filter(item => item._id !== action.payload);
            state.items.map((item) => {
                state.subtotal += item.quantity * item.price
                state.count += item.quantity
            })
        },
        reduceItemCount: (state,action) => {
            state.subtotal = 0
            state.count = 0
            const _id = action.payload._id
            let isNew = true;
            state.items.map((item) => {
                if(item._id == _id && item.quantity !== 1) {
                    item.quantity -= 1
                    return item
                }
            })
            state.items.map((item) => {
                state.subtotal += item.quantity * item.price
                state.count += item.quantity
            })
        }
    }
})

export const cartSliceActions = cartSlice.actions
export default cartSlice.reducer;