import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import React, { useContext } from "react"
import { MoveHorizontalIcon } from "lucide-react"
import { NavBar } from "@/components/navBar"
import { Footer } from "@/components/footer"
import { GlobalContext } from "@/App"
import { Order } from "@/types"
import api from "@/api"
import { useQuery } from "@tanstack/react-query"
import { Card } from "@/components/ui/card"

export function UserAccount() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state } = provider

  const getOrdersById = async (id: string | undefined) => {
    try {
      const res = await api.get(`/orders/user/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const { data: orders } = useQuery<Order[]>({
    queryKey: ["addresses", state.user?.nameidentifier],
    queryFn: () => getOrdersById(state.user?.nameidentifier)
  })

  console.log("Orders:", orders)

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-12 md:px-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col items-center gap-4">
          <Avatar className="h-24 w-24 border-4 border-gray-100 dark:border-gray-800">
            <img src="../images/avatar.jpg" alt="User Avatar" />
            <AvatarFallback>{state.user?.name}</AvatarFallback>
          </Avatar>
          {/* lg:text-left */}
          <div className="text-center ">
            <h1 className="text-2xl font-bold">{state.user?.name}</h1>
            {/* <p className="text-gray-500 dark:text-gray-400">Plant enthusiast and nature lover</p> */}
            <p className="text-gray-500 dark:text-gray-400">{state.user?.emailaddress}</p>
          </div>
        </div>
        <div className="prose prose-lg max-w-none dark:prose-invert">
          {/* <p>
            Hi, I am John, and I am passionate about all things plants! From succulents to tropical
            foliage, I love learning about the unique characteristics and care requirements of
            different plant species. My goal is to create a lush, thriving indoor oasis and share my
            knowledge with others.
          </p> */}
        </div>
      </div>
      <div className="container mx-auto grid gap-12 px-4 py-12 md:px-6">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Previous Orders</h2>
          <Card className=" mt-10 border shadow-sm rounded-lg p-2 col-span-1 mx-4 mb-10 sm:col-span-2 lg:col-span-3">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Order</TableHead>
                  {/* <TableHead className="min-w-[150px]">Customer</TableHead> */}
                  {/* <TableHead className="hidden md:table-cell">Channel</TableHead> */}
                  <TableHead className="hidden text-left md:table-cell">Date</TableHead>
                  <TableHead className="text-left">Total</TableHead>
                  <TableHead className=" text-left ">Status</TableHead>
                  {/* <TableHead className="text-left hidden sm:table-cell">Actions</TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders?.map((order) => {
                  return (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium text-left">#{order.id.split("-")[0]}</TableCell>
                      {/* <TableCell>John Doe</TableCell> */}
                      {/* <TableCell className="hidden md:table-cell">Online Store</TableCell> */}
                      <TableCell className="hidden text-left md:table-cell">
                        {order.orderDate.split("T")[0]}
                      </TableCell>
                      <TableCell className="text-left">${order.totalPrice}</TableCell>
                      <TableCell className="text-left">{order.status}</TableCell>
                      {/* <TableCell className="text-left hidden sm:table-cell">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoveHorizontalIcon className="w-4 h-4" />
                              <span className="sr-only">Actions</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View order</DropdownMenuItem>
                            <DropdownMenuItem>Customer details</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell> */}
                    </TableRow>
                  )
                })}
                {/* <TableRow>
                  <TableCell className="font-medium">#3209</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell className="hidden md:table-cell">Shop</TableCell>
                  <TableCell className="hidden md:table-cell">January 5, 2022</TableCell>
                  <TableCell className="text-right">$74.99</TableCell>
                  <TableCell className="hidden sm:table-cell">Paid</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">#3204</TableCell>
                  <TableCell>John Doe</TableCell>
                  <TableCell className="hidden md:table-cell">Shop</TableCell>
                  <TableCell className="hidden md:table-cell">August 3, 2021</TableCell>
                  <TableCell className="text-right">$64.75</TableCell>
                  <TableCell className="hidden sm:table-cell">Unfulfilled</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoveHorizontalIcon className="w-4 h-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View order</DropdownMenuItem>
                        <DropdownMenuItem>Customer details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow> */}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  )
}
