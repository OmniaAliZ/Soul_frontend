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
import api from "@/api"
import { useQuery } from "@tanstack/react-query"
import { Order } from "@/types"
import { Footer } from "@/components/footer"

//!!!!!!!!!!!!!!!!MOVE TO / AFTER LOGOUT

export function Dashboard() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state } = provider

  const getOrders = async () => {
    try {
      const res = await api.get("/orders")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: getOrders
  })
  return (
    <>
      <AdminNavbar />
      <div className="flex flex-col mx-auto mb-6">
        {/* <div> */}
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back, {state.user?.name}</p>
        {/* </div> */}
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
        <Card className="col-span-1 mb-10 sm:col-span-2 lg:col-span-3">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Orders</CardTitle>
            {/* <div className="flex items-center gap-4">
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
            </div> */}
          </CardHeader>
          <CardContent>
            <Table className="mt-20 w-4/5 mx-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Invoice</TableHead>
                  <TableHead className="text-left">Status</TableHead>
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="text-left">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className=" text-left">{order.id}</TableCell>
                    <TableCell className=" text-left">{order.status}</TableCell>
                    <TableCell className=" text-left">{order.orderDate.toString()}</TableCell>
                    <TableCell className=" text-left">${order.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  )
}
