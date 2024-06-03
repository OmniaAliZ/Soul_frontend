import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { Home } from "./pages/home"
import { Dashboard } from "./pages/dashboard"
import { ProductDetails } from "./pages/productDetails"
import "./App.css"
import { Toaster } from "@/components/ui/toaster"
import { createContext, useEffect, useState } from "react"
import { DecodedUser, Product } from "./types"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { PrivateRoute } from "./components/privateRoute"
import { AddProduct } from "./components/addProduct"
import { ProductTable } from "./components/productsTable"
import { AddUser } from "./components/addUser"
import { UsersTable } from "./components/usersTable"
import { AddCategory } from "./components/addCategory"
import { CategoriesTable } from "./components/categoriesTable"
import { AdminNavbar } from "./components/adminNavbar"
import { UserProfile } from "./pages/userProfile"
import { ProductByCategory } from "./pages/productByCategory"
import { Checkout } from "./pages/checkout"
import { Thankyou } from "./pages/thankyou"
import { Shipping } from "./pages/shipping"
import { Return } from "./pages/return"
import { Footer } from "./components/footer"
import { AllProducts } from "./pages/allProducts"
import { Contact } from "./pages/contact"
import { PlantCare } from "./pages/plantCare"
import { PlantingGuide } from "./pages/plantingGuide"
import { FAQ } from "./pages/faq"
import { About } from "./pages/about"
import ScrollToTop from "./lib/scrollToTop"
// ProductService
//!!!!!! WHY ALWAYS : Context is missing ERROR ??????????????
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Toaster /> <Home />
      </ScrollToTop>
    )
  },
  {
    path: "/shipping",
    element: (
      <ScrollToTop>
        <Shipping />
      </ScrollToTop>
    )
  },
  {
    path: "/return",
    element: (
      <ScrollToTop>
        <Return />
      </ScrollToTop>
    )
  },
  {
    path: "/about",
    element: (
      <ScrollToTop>
        <About />
      </ScrollToTop>
    )
  },
  {
    path: "/products/:id",
    element: (
      <ScrollToTop>
        <Toaster /> <ProductDetails />
      </ScrollToTop>
    )
  },
  {
    path: "/products/section/:id",
    element: (
      <ScrollToTop>
        <Toaster /> <ProductByCategory />
      </ScrollToTop>
    )
  },
  {
    path: "/dashboard",
    element: (
      <ScrollToTop>
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      </ScrollToTop>
    )
  },
  {
    path: "/dashboard/products",
    element: (
      <ScrollToTop>
        <PrivateRoute>
          <>
            <AdminNavbar />
            <AddProduct />
            <ProductTable />
            <Footer />
          </>
        </PrivateRoute>
      </ScrollToTop>
    )
  },
  {
    path: "/dashboard/users",
    element: (
      <ScrollToTop>
        <PrivateRoute>
          <>
            <AdminNavbar />
            <AddUser />
            <UsersTable />
            <Footer />
          </>
        </PrivateRoute>
      </ScrollToTop>
    )
  },
  {
    path: "/dashboard/categories",
    element: (
      <ScrollToTop>
        <PrivateRoute>
          <>
            <AdminNavbar />
            <AddCategory />
            <CategoriesTable />
            <Footer />
          </>
        </PrivateRoute>
      </ScrollToTop>
    )
  },
  {
    path: "/profile",
    element: (
      <ScrollToTop>
        {/* <PrivateRoute> */}
        <UserProfile />
        {/* </PrivateRoute> */}
      </ScrollToTop>
    )
  },
  {
    path: "/checkout",
    element: (
      <ScrollToTop>
        <Checkout />
      </ScrollToTop>
    )
  },
  {
    path: "/contact",
    element: (
      <ScrollToTop>
        <Contact />
      </ScrollToTop>
    )
  },
  {
    path: "/care",
    element: (
      <ScrollToTop>
        <PlantCare />
      </ScrollToTop>
    )
  },
  {
    path: "/planting",
    element: (
      <ScrollToTop>
        <PlantingGuide />
      </ScrollToTop>
    )
  },
  {
    path: "/faq",
    element: (
      <ScrollToTop>
        <FAQ />
      </ScrollToTop>
    )
  },
  {
    path: "/login",
    element: (
      <ScrollToTop>
        <Login />
      </ScrollToTop>
    )
  },
  {
    path: "/products",
    element: (
      <ScrollToTop>
        <Toaster /> <AllProducts />
      </ScrollToTop>
    )
  },
  {
    path: "/thankyou",
    element: (
      <ScrollToTop>
        <Thankyou />
      </ScrollToTop>
    )
  },
  {
    path: "/signup",
    element: (
      <ScrollToTop>
        <Signup />
      </ScrollToTop>
    )
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
