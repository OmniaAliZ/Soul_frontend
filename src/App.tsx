import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.css"
import { Home } from "./pages/home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:id",
    element: <Home /> //ProductDetails
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Home />
    </div>
  )
}

export default App
