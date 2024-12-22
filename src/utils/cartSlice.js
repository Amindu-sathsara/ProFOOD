import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:["Pizza","Ban"]
    },
    reducers:{
        addItem:(state,action)=>{
            //Noted: Mutating the state here    >>> I mean we are directly modifying the state here 
            //Immer.js library take care of the mutation and all the action and behind the scene redux toolkit use immer.js library
            
            state.items.push(action.payload);


            //Vanial redux or older way of redux => DON'T MUTATE THE STATE directly , returing is also mandatory
            //const newState=[...state]
            //newState.items.push(action.payload);
            //return newState;

        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;

            // there is a alternative for the same thing for above line 26
            //return {items:[]}      //this new [] will be replaced inside original state =[] 
        }
    },
    });

    export const {addItem,removeItem,clearCart}=cartSlice.actions;

    export default cartSlice.reducer;