import { AdminNavbar } from "@/components/adminNavbar"
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
import { CreditCardIcon, DollarSignIcon, UsersIcon } from "lucide-react"
import { useContext } from "react"
import { GlobalContext } from "@/App"

//!!!!!!!!!!!!!!!!MOVE TO / AFTER LOGOUT

export function Dashboard() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state } = provider
  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col mx-auto mb-6">
        {/* <div> */}
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back, {state.user?.name}</p>
        {/* </div> */}
      </div>{" "}
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
    </>
  )
}
