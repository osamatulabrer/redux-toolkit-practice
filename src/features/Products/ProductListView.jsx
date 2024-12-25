import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteProduct, fetchProduct } from './productSlice';

const ProductListView = () => {
  const { products, isLoading, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

   

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Ensure rendering of products if available
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="mb-4 bg-gray-100 rounded-sm shadow-md hover:-translate-y-1 transition-all duration-200 ease-linear">
            <h4 className="font-bold text-lg">{product.title}</h4>
            <div className="text-gray-600">{product.description}</div>
            <p className="text-gray-600">category: {product.category}</p>
            <p className="text-gray-600">price: {product.price}</p>
            <div className='flex justify-between items-center px-2'>

              <button onClick={()=>dispatch(DeleteProduct(product.id))} className='border border-gray-500 py-2 px-6 rounded text-lg font-medium my-4 bg-slate-100 hover:bg-slate-300'>Delete</button>
              <button  className='border border-gray-500 py-2 px-6 rounded text-lg font-medium my-4 bg-slate-100 hover:bg-slate-300'>Edit</button>
            </div>
          </div>
        ))
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
};

export default ProductListView;
