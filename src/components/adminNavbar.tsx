import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import {
  GalleryVerticalEndIcon,
  HomeIcon,
  LeafIcon,
  LogOutIcon,
  MenuIcon,
  PackageIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  UsersIcon
} from "lucide-react"
import { Link } from "react-router-dom"
import { GlobalContext } from "@/App"
import { useContext } from "react"

export function AdminNavbar() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { handleRemoveUser } = provider

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    handleRemoveUser()
  }
  return (
    <>
      <header className="flex items-center justify-between mb-28 h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow ">
        {/* fixed w-full */}
        <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
          <GalleryVerticalEndIcon className="w-6 h-6 " />
          <span>DASHBOARD</span>
        </Link>
        <nav className="hidden md:flex items-center mx-auto gap-6 text-sm font-medium">
          <Link
            className="text-[#728b6d] flex flex-col items-center hover:text-[#47523f] transition-colors"
            to="/dashboard"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Overview</span>
          </Link>
          <Link
            className="text-[#728b6d] flex flex-col items-center hover:text-[#47523f] transition-colors"
            to="/dashboard/categories"
          >
            <PackageIcon className="w-5 h-5" />
            <span>Categories</span>
          </Link>
          <Link
            className="text-[#728b6d] flex flex-col items-center hover:text-[#47523f] transition-colors"
            to="/dashboard/products"
          >
            <ShoppingCartIcon className="w-5 h-5" />
            <span>Products</span>
          </Link>
          <Link
            className="text-[#728b6d] flex flex-col items-center hover:text-[#47523f] transition-colors"
            to="/dashboard/users"
          >
            <UsersIcon className="w-5 h-5" />
            <span>Users</span>
          </Link>
          <Link
            className="text-[#728b6d] flex flex-col items-center hover:text-[#47523f] transition-colors"
            to="/"
          >
            <ShoppingBagIcon className="w-5 h-5" />
            <span>Shop</span>
          </Link>
        </nav>
        <Link
          className="text-[#728b6d] md:flex hidden flex-col items-center hover:text-[#47523f] transition-colors"
          onClick={handleLogout}
          to="/"
        >
          <LogOutIcon className="w-5 h-5" />
          <span>Logout</span>
        </Link>
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
                {/* <LeafIcon className="w-6 h-6 " /> */}
                <img className="w-8 h-8" src="../src/images/logo.png" />
                <span>Soul.</span>
              </Link>
              <nav className="grid gap-4">
                <Link
                  className="flex items-center gap-2 text-[#728b6d] hover:text-[#47523f] transition-colors"
                  to="/dashboard"
                >
                  <HomeIcon className="w-5 h-5" />
                  <span>Overview</span>
                </Link>
                <Link
                  className="flex items-center gap-2 text-[#728b6d] hover:text-[#47523f] transition-colors"
                  to="/dashboard/categories"
                >
                  <PackageIcon className="w-5 h-5" />
                  <span>Categories</span>
                </Link>
                <Link
                  className="flex items-center gap-2 text-[#728b6d] hover:text-[#47523f] transition-colors"
                  to="/dashboard/products"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                  <span>Products</span>
                </Link>
                <Link
                  className="flex items-center gap-2 text-[#728b6d] hover:text-[#47523f] transition-colors"
                  to="/dashboard/users"
                >
                  <UsersIcon className="w-5 h-5" />
                  <span>Users</span>
                </Link>
                <Link
                  className="flex items-center gap-2 text-[#728b6d] hover:text-[#47523f] transition-colors"
                  onClick={handleLogout}
                  to="/"
                >
                  <LogOutIcon className="w-5 h-5" />
                  <span>Logout</span>
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
