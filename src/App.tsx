import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/home"
import { Dashboard } from "./pages/dashboard"
import { ProductDetails } from "./pages/productDetails"
import "./App.css"
import { createContext, useEffect, useState } from "react"
import { DecodedUser, Product } from "./types"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { PrivateRoute } from "./components/privateRoute"
// ProductService
//!!!!!! WHY ALWAYS : Context is missing ERROR ??????????????
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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])
type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void
  handleStoreUser: (user: DecodedUser) => void
  handleRemoveCart: () => void
  handleRemoveUser: () => void
}
type GlobalState = {
  cart: Product[]
  user: DecodedUser | null
}
export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: [],
    user: null
  })
  useEffect(() => {
    const user: string | null = localStorage.getItem("user")
    if (user) {
      const decodedUser = JSON.parse(user)
      setState({
        ...state,
        user: decodedUser
      })
    }
  }, [])
  const handleAddToCart = (product: Product) => {
    const products = state.cart.filter((p) => p.id === product.id)
    const inStock = product.quantity > products.length

    if (inStock) {
      setState((prevState) => ({
        ...prevState,
        cart: [...prevState.cart, product]
      }))
    }
  }
  const handleRemoveCart = () => {
    setState({
      ...state,
      cart: []
    })
  }
  const handleDeleteFromCart = (id: string) => {
    // const filteredCart = state.cart.filter((item) => item.id !== id)
    const cart = state.cart
    const index = cart.findIndex((item) => item.id === id)
    cart.splice(index, 1)
    setState({
      ...state,
      cart: cart
    })
  }
  const handleStoreUser = (user: DecodedUser) => {
    setState({ ...state, user })
  }
  const handleRemoveUser = () => {
    setState({ ...state, user: null })
  }
  return (
    <div className="App">
      <GlobalContext.Provider
        value={{
          handleStoreUser,
          state,
          handleAddToCart,
          handleDeleteFromCart,
          handleRemoveCart,
          handleRemoveUser
        }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
