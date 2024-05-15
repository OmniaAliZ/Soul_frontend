// import api from "@/api"
// import { User } from "@/types"
// import { useQuery } from "@tanstack/react-query"

import { AddProduct } from "@/components/addProduct"
import { ProductTable } from "@/components/productsTable"

export function Dashboard() {
  //   const getUsers = async () => {
  //     try {
  //       const res = await api.get("/users")
  //       return res.data
  //     } catch (error) {
  //       console.error(error)
  //       return Promise.reject(new Error("Something went wrong"))
  //     }
  //   }
  //   const { data, error } = useQuery<User[]>({
  //     queryKey: ["users"],
  //     queryFn: getUsers
  //   })
  return (
    <>
      <AddProduct />
      <ProductTable />
    </>
  )
}
