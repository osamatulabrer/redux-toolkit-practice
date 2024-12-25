import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BookSlice";

const BookForm = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new book object with a unique ID
    const newBook = {
      ...books,
      id: crypto.randomUUID(), // Adding the ID
    };

    dispatch(addBook(newBook)); // Dispatch the action with the new book object

    // Reset the form after submission
    setBooks({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Extract the name and value from the event
    setBooks((prev) => ({
      ...prev,
      [name]: value, // Dynamically update the specific field
    }));
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-md text-center">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={handleChange}
              value={books.title}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="text"
              placeholder="Author"
              className="input input-bordered"
              name="author"
              value={books.author}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="number"
              placeholder="Price"
              value={books.price}
              className="input input-bordered"
              name="price"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mt-4">
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered"
              value={books.quantity}
              name="quantity"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
