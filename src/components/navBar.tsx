import { Button } from "@/components/ui/button"
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { MenuIcon, ShoppingCartIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Cart } from "@/components/cart"
import { GlobalContext } from "@/App"
import { useContext } from "react"
import { Category, ROLE } from "@/types"
import api from "@/api"
import { useQuery } from "@tanstack/react-query"

//!!!!! WHY NOT GO TO HOME WHEN LOGOUT??????
export function NavBar() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleRemoveUser } = provider

  const getCategories = async () => {
    try {
      const res = await api.get("/categories")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    handleRemoveUser()
  }
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-[#eef2ec] shadow ">
        {/* fixed w-full */}
        <Link className="flex items-center gap-2 text-2xl font-semibold" to="/">
          <img className="w-8 h-8" src="images/logo.png" />
          <span>Soul</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
            to="/"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors">
                Shop
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className=" w-56" align="center">
              <Link className=" hover:no-underline text-[#47523f]" to="/products">
                <DropdownMenuItem>All</DropdownMenuItem>
              </Link>
              {categories?.map((cat) => {
                return (
                  <Link
                    className=" hover:no-underline text-[#47523f]"
                    key={cat.id}
                    to={`/products/section/${cat.id}`}
                  >
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{cat.name}</DropdownMenuItem>
                  </Link>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
            to="/"
          >
            About Us
          </Link>
          <Link
            className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
            to="/contact"
          >
            Contact
          </Link>
          {state.user?.role === ROLE.Admin && (
            <Link
              className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
          {!state.user && (
            <Link
              className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
              to="/login"
            >
              Login
            </Link>
          )}
          {!state.user && (
            <Link
              className="text-[#47523f] text-lg hover:underline hover:text-[#30372b] transition-colors"
              to="/signup"
            >
              Signup
            </Link>
          )}
          {/* {state.user && (
            <Link
              className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
              onClick={handleLogout}
              to="/"
            >
              Logout
            </Link>
          )} */}
          {/* <Link
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors flex items-center gap-2"
          to="#"
        >
          <Button className="rounded-full" size="icon" variant="outline">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </Link> */}
        </nav>
        <div className=" flex items-center gap-6">
          <Cart />
          {state.user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full border" size="icon" variant="ghost">
                  <img
                    alt="Avatar"
                    className="rounded-full bg-cover"
                    src="images/avatar.jpg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover"
                    }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center">
                <DropdownMenuLabel className=" hover:no-underline text-[#47523f]">
                  My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link className=" hover:no-underline text-[#47523f]" to="/profile">
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
                <DropdownMenuItem className=" hover:no-underline text-[#47523f]">
                  Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <Link className=" hover:no-underline text-[#47523f]" onClick={handleLogout} to="/">
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-6 p-4">
              <Link className="flex items-center text-[#728b6d] gap-2 text-lg font-semibold" to="/">
                {/* <LeafIcon className="w-6 h-6" /> */}
                <img className="w-8 h-8" src="images/logo.png" />
                <span>Soul.</span>
              </Link>
              <nav className="grid gap-4">
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="/"
                >
                  Shop
                </Link>
                {state.user?.role === ROLE.Admin && (
                  <Link
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                )}
                {!state.user && (
                  <Link
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                    to="/signup"
                  >
                    Signup
                  </Link>
                )}
                {!state.user && (
                  <Link
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
                {state.user && (
                  <Link
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                    onClick={handleLogout}
                    to="/"
                  >
                    Logout
                  </Link>
                )}
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="/checkout"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Cart</span>
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
