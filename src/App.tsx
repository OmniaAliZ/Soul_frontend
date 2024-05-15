import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { Home } from "./pages/home"
import { Dashboard } from "./pages/dashboard"
import { ProductDetails } from "./pages/productDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:id",
    element: <ProductDetails />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
