import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:["Pizza","Ban"]
    },
    reducers:{
        addItem:(state,action)=>{
            //Noted: Mutating the state here    >>> I mean we are directly modifying the state here 

            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    },
    });

    export const {addItem,removeItem,clearCart}=cartSlice.actions;

    export default cartSlice.reducer;