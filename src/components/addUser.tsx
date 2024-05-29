import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import api from "@/api"
import { useQueryClient } from "@tanstack/react-query"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Card } from "./ui/card"
// !!!!!! DO WE NEED IT?????

export function AddUser() {
  const queryClient = useQueryClient()

  const [user, setUser] = useState({
    email: "",
    fullName: "",
    phone: "",
    password: "",
    role: "Customer"
  })

  const postProduct = async () => {
    try {
      const res = await api.post("/users/signup", user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setUser({ ...user, [name]: value })
  }
  const handleRole = (value: string) => {
    console.log(value)
    setUser({ ...user, role: value })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postProduct()
    await handleReset()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }
  const handleReset = async () => {
    setUser({
      email: "",
      fullName: "",
      phone: "",
      password: "",
      role: "Customer"
    })
  }

  // const productWithCat = product?.map((product)=> {
  //     const category = categories.find((cat)=>cat.id === product.categoryId)
  //     if(category){
  //         return {
  //             ...product,
  //             categoryName: category.name
  //         }
  //     }
  // })
  return (
    <>
      <Card className="container py-8">
        <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Add new User
          </h2>

          <Select defaultValue="Customer" onValueChange={handleRole}>
            <SelectTrigger className="mt-5" name="role">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem key="Customer" value="Customer">
                Customer
              </SelectItem>
              <SelectItem key="Admin" value="Admin">
                Admin
              </SelectItem>
            </SelectContent>
          </Select>

          <Input
            name="fullName"
            className="mt-5"
            type="text"
            placeholder="Name"
            onChange={handleChange}
            value={user.fullName}
          />
          <Input
            name="email"
            className="mt-5"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            value={user.email}
          />
          <Input
            name="password"
            className="mt-5"
            type="text"
            placeholder="Password"
            onChange={handleChange}
            value={user.password}
          />
          <Input
            name="phone"
            className="mt-5"
            type="number"
            placeholder="Phone number"
            onChange={handleChange}
            value={user.phone}
          />
          <div className="flex justify-evenly">
            <Button className="mt-5 mx-1 w-2/3" type="submit">
              Add
            </Button>
            <Button className="mt-5 mx-1 w-2/3" type="reset">
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </>
  )
}
