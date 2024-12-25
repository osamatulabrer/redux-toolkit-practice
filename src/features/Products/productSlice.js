import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   isLoading:false,
   products:[],
   error:null
}
const Base_URL = 'http://localhost:4000/products'

export const fetchProduct = createAsyncThunk('products/fetchProduct',
    async()=>{
    //  fetch('http://localhost:3000/products')
    //  .then(res => res.json())
    //  .then(res1 => console.log(res1)
    //  )
    // let conn = await fetch('http://localhost:4000/products')
    // let data = conn.json()
    let conn = await axios.get(Base_URL)
    return conn.data
    
    
    
})
export const DeleteProduct = createAsyncThunk('products/DeleteProduct',
    async(id)=>{
    let conn = await axios.delete(`${Base_URL}/${id}`)
    return id
    
})


export const createProduct = createAsyncThunk('products/createProduct',
    async(product)=>{
    let conn = await axios.post(Base_URL,product)
    
    return conn.data;
    
    
})




const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProduct.pending,(state)=>{
                state.isLoading = true,
                state.error = null
        })
        .addCase(fetchProduct.fulfilled,(state,action)=>{
                state.isLoading = false,
                state.products = action.payload
                
        })
        .addCase(fetchProduct.rejected,(state,action)=>{
                state.products = [],
                state.error = action.error.message
        })
        builder
        .addCase(DeleteProduct.fulfilled,(state,action)=>{
           
            // const findIndex = state.products.findIndex(item => (item.id === action.payload))
            // state.products.splice(findIndex,1) correct way
            // state.products.splice(action.payload,1) wrong
            state.products = state.products.filter(product =>( product.id !== action.payload))
    })
        builder
        .addCase(createProduct.fulfilled,(state,action)=>{
           
           
            state.products.push(action.payload)
    })
    }
})

export default productSlice.reducer