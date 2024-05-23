import { AddProduct } from "@/components/addProduct"
import { NavBar } from "@/components/navBar"
import { ProductTable } from "@/components/productsTable"
import { UsersTable } from "@/components/usersTable"
// import { DecodedUser } from "@/types"

//!!!!!!!!!!!!!!!!MOVE TO / AFTER LOGOUT

export function Dashboard() {
  return (
    <>
      <NavBar />
      <AddProduct />
      <ProductTable />
      <UsersTable />
    </>
  )
}
