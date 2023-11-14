import { configureStore, createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state)=>{
            state.counter += 1
        },
        decrement: (state)=>{
            state.counter -= 1
        }
    }
})

export const actions = counterSlice.actions;

export const store = configureStore({
    reducer: {
        
    }
})

