import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{ 
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity +=1;
            state.products.push(action.payload);
            state.total +=action.payload.price * action.payload.quantity;
            
        },  
        deleteItem: (state, action) => {
            state.quantity -= 1;
            state.total -= action.payload.price * action.payload.quantity;
          },
        reset: (state) => {
           
            state.products= [];
            state.quantity= 0;
            state.total= 0;
          },
    },
});

export const {addProduct,deleteItem, reset} = cartSlice.actions;
export default cartSlice.reducer;