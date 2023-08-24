import { createSlice } from "@reduxjs/toolkit";

const initialState = {value:{count:0}}
const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        Increment: (state ) => {
            state.value.count = state.value.count + 1
        },

        Decrement: (state) => {
        state.value.count = state.value.count - 1
        }
    }

})

export const {Increment, Decrement}  = countSlice.actions;
export default countSlice.reducer