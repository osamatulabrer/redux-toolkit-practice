
import { useDispatch, useSelector } from 'react-redux'
import {deleteBook} from './BookSlice'


const BookList = () => {
    const books = useSelector((state )=> state.books.books)
    
    const dispatch = useDispatch()
    const handleDelete = (id)=>{
        dispatch(deleteBook(id));   
    }
    const handleEdit = (id)=>{
        console.log(id);
           
    }
  return (
    <div>
        <h2 className='text-lg font-semibold capitalize'>list of books</h2>
        <ul className='space-y-3'>
          {books.length != 0 ?
          books.map(book => (
            <div key={book.id}>
            <li className='text-lg '>book name: {book.title} by {book.author} price: ${book.price} quantity: {book.quantity}</li>
            <button className='py-2 px-4 rounded-sm bg-gray-100 mx-4' onClick={() => handleDelete(book.id)}>delete</button>
            <button className='py-2 px-4 rounded-sm bg-gray-100 mx-4' onClick={() => handleEdit(book.id)}>edit</button>
            </div>
          )): <p className='text-center font-semibold text-lg'>no book exist</p>
          }
           
        </ul>

    </div>
  )
}

export default BookList