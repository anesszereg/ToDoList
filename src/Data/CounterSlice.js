import  { createSlice } from '@reduxjs/toolkit';




const initialState = {
    count: 10,
    name:'vounter',
    age: 0,
    email:'',
    shooping :[]
    
}



const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count += 1
        }
        ,
        decrement: (state)=>{
            state.count -= 1
        }
,
        incrementByAmount: (state, action) => {

            console.log('====================================');
            console.log(action);
            console.log('====================================');
            state.count += Number(action.payload)
        },



    }


})


export const {increment , decrement , incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
