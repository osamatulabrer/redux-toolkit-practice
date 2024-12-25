import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   books: [{ id: 1, title: 'kewn', author:'anis', price: 12, quantity: 10 },
    { id: 2, title: 'kedr', author:'anas', price: 15, quantity: 50 }]
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        deleteBook:(state,action) =>{
            const id = action.payload;
            state.books = state.books.filter((book) => {
                return book.id !== id
            })
        },
        addBook:(state,action)=>{
            state.books.push(action.payload)
        }
    }, 
});

export default bookSlice.reducer;

// If there are no actions, you can remove this line or update when actions are added.
export const {deleteBook,addBook} = bookSlice.actions;
