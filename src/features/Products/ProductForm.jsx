import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from './productSlice'

const ProductForm = () => {
    const dispatch = useDispatch()

    const [product, setProduct] = useState({
        title:'',
        description:'',
        category:'',
        price:''
    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        setProduct(e.target.value);
        dispatch(createProduct({...product, id:crypto.randomUUID()}))
        

    }

    const handleChange = (e)=>{
          

            
           console.log(product);
    }
        
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
            value={product.title}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            placeholder="description"
            className="input input-bordered"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="text"
            placeholder="category"
            value={product.category}
            className="input input-bordered"
            name="category"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control mt-4">
          <input
            type="number"
            placeholder="price"
            className="input input-bordered"
            value={product.price}
            name="price"
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
  )
}

export default ProductForm