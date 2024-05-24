import { AddCategory } from "@/components/addCategory"
import { AddProduct } from "@/components/addProduct"
import { AddUser } from "@/components/addUser"
import { CategoriesTable } from "@/components/categoriesTable"
import { NavBar } from "@/components/navBar"
import { ProductTable } from "@/components/productsTable"
import { UsersTable } from "@/components/usersTable"
// import { DecodedUser } from "@/types"

//!!!!!!!!!!!!!!!!MOVE TO / AFTER LOGOUT

// export function Dashboard() {
//   return (
//     <>
//       <NavBar />
//       <AddProduct />
//       <ProductTable />
//       <AddUser />
//       <UsersTable />
//       <AddCategory />
//       <CategoriesTable />
//     </>
//   )
// }

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination
} from "@/components/ui/pagination"
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table
} from "@/components/ui/table"
import { CreditCardIcon, DollarSignIcon, HomeIcon, LogOutIcon, MountainIcon, MoveVerticalIcon, PackageIcon, PieChartIcon, SettingsIcon, ShoppingCartIcon, SignalIcon, UsersIcon } from "lucide-react"

export function Dashboard() {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-gray-400 p-6 flex flex-col justify-between">
        <div className="space-y-6">
          <Link className="flex items-center gap-2 text-white" to="/dashboard">
            <span className="text-lg font-semibold">Dashboard</span>
          </Link>
          <nav className="space-y-2">
            <Link className="flex items-center gap-2 hover:text-white" to="/dashboard">
              <HomeIcon className="w-5 h-5" />
              <span>Overview</span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" to="#">
              <PieChartIcon className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" to="#">
              <SettingsIcon className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" to="#">
              <UsersIcon className="w-5 h-5" />
              <span>Users</span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" to="#">
              <PackageIcon className="w-5 h-5" />
              <span>Categories</span>
            </Link>
            <Link className="flex items-center gap-2 hover:text-white" to="#">
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Products</span>
            </Link>
          </nav>
        </div>
        <div className="space-y-2">
          <Link className="flex items-center gap-2 hover:text-white" to="#">
            <LogOutIcon className="w-5 h-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
      <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Welcome back, John Doe</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded-full" size="icon" variant="outline">
              <SignalIcon className="w-5 h-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button className="rounded-full" size="icon" variant="outline">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover"
                }}
                width="32"
              />
              <span className="sr-only">User Menu</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Revenue</CardTitle>
              <DollarSignIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$45,231.89</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>New Subscriptions</CardTitle>
              <UsersIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">+2,350</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Total Sales</CardTitle>
              <CreditCardIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">+12,234</div>
              <p className="text-sm text-gray-500 dark:text-gray-400">+19% from last month</p>
            </CardContent>
          </Card>
          <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <div className="flex items-center gap-4">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <Button className="rounded-full" size="icon" variant="outline">
                  <MoveVerticalIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span className="sr-only">More options</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV002</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$150.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV003</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$350.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV004</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$450.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV005</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$550.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV006</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$650.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV007</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$750.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV008</TableCell>
                    <TableCell>Unpaid</TableCell>
                    <TableCell>Bank Transfer</TableCell>
                    <TableCell className="text-right">$850.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV009</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$950.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">INV010</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>PayPal</TableCell>
                    <TableCell className="text-right">$1,050.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
