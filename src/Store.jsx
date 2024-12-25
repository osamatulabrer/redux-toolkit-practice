
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/book/BookSlice";
import postSlice from './features/dataFetch/postSlice' 
import productSlice from './features/Products/productSlice'

const store = configureStore({
    reducer: {
        books: bookReducer,
        posts:postSlice, 
        products:productSlice// Use the reducer here
    },
});

export default store;
