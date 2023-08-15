import { createSlice } from "@reduxjs/toolkit";

interface cartCounterState {
    value: number
}

const initialState : cartCounterState = {
    value: 0,
}

export const cartCounterSlice = createSlice({
    name: "cartCounter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0
        }
    }
});

export const cartCounterActions = cartCounterSlice.actions;
export default cartCounterSlice.reducer; 