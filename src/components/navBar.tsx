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
import { LeafIcon, MenuIcon, ShoppingCartIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Cart,CartN } from "@/components/cart"
export function NavBar() {
  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white dark:bg-gray-950 shadow fixed w-full">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
          <LeafIcon className="w-6 h-6 text-green-500" />
          <span>Blooming</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            to="#"
          >
            About
          </Link>
          <Link
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
            to="#"
          >
            Contact
          </Link>
          {/* <Link
          className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors flex items-center gap-2"
          to="#"
        >
          <Button className="rounded-full" size="icon" variant="outline">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
        </Link> */}
          <Cart />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="https://img.freepik.com/premium-vector/avatar-profile-vector-illustrations-website-social-networks-user-profile-icon_495897-224.jpg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover"
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-6 p-4">
              <Link className="flex items-center gap-2 text-lg font-semibold" to="#">
                <LeafIcon className="w-6 h-6 text-green-500" />
                <span>Blooming.</span>
              </Link>
              <nav className="grid gap-4">
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="#"
                >
                  Home
                </Link>
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="#"
                >
                  Shop
                </Link>
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="#"
                >
                  About
                </Link>
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="#"
                >
                  Contact
                </Link>
                <Link
                  className="flex items-center gap-2 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors"
                  to="#"
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

// function LeafIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
//       <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
//     </svg>
//   )
// }

// function MenuIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="4" x2="20" y1="12" y2="12" />
//       <line x1="4" x2="20" y1="6" y2="6" />
//       <line x1="4" x2="20" y1="18" y2="18" />
//     </svg>
//   )
// }

// function ShoppingCartIcon(props:any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="8" cy="21" r="1" />
//       <circle cx="19" cy="21" r="1" />
//       <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
//     </svg>
//   )
// }
