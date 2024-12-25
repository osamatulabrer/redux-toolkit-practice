import ProductForm from "./features/Products/ProductForm"
import ProductListView from "./features/Products/ProductListView"






const App = () => {
  return (
    <div className="w-full mx-auto text-center bg-base-200 min-h-screen space-y-5">
        <ProductListView/>
        <ProductForm/>
    </div>
  )
}

export default App