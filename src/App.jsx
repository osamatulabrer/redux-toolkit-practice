import { useState } from "react"
import ProductForm from "./features/Products/ProductForm"
import ProductListView from "./features/Products/ProductListView"






const App = () => {
  const [isEdit,setIsEdit] = useState(false)
  const [productToEdit,setproductToEdit] = useState({})
  const onHandleProductToEdit = (product)=>{
    setproductToEdit(product);
    setIsEdit(true)
      
  }

  const resetForm = () => {
    setproductToEdit(null);
    setIsEdit(false);
  }
  return (
    <div className="w-full mx-auto text-center bg-base-200 min-h-screen space-y-5">
        <ProductListView onHandleProductToEdit={onHandleProductToEdit}/>
        <ProductForm productToEdit={productToEdit} isEdit={isEdit} resetForm={resetForm}/>
    </div>
  )
}

export default App