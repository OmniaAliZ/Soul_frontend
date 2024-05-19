import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import api from "@/api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Category } from "@/types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function AddProduct() {
  const queryClient = useQueryClient()

  const [product, setProduct] = useState({
    name: "",
    categoryId: "3fa85f64-5717-4562-b3fc-2c963f66af16",
    image: "",
    quantity: "",
    price: "",
    description: ""
  })

  const getCategories = async () => {
    try {
      const res = await api.get("/categories")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const postProduct = async () => {
    try {
      const res = await api.post("/products", product)
      return res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const { data } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setProduct({ ...product, [name]: value })
  }
  const handleCategory = (value: string) => {
    console.log(value)
    setProduct({ ...product, categoryId: value })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postProduct()
    await handleReset()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }
  const handleReset = async () => {
    setProduct({
      name: "",
      categoryId: "3fa85f64-5717-4562-b3fc-2c963f66af16",
      image: "",
      quantity: "",
      price: "",
      description: ""
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
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Add new product
        </h2>

        <Select defaultValue="3fa85f64-5717-4562-b3fc-2c963f66af16" onValueChange={handleCategory}>
          <SelectTrigger className="mt-5" name="categoryId">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {data?.map((category: Category) => {
              return (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>

        <Input
          name="name"
          className="mt-5"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={product.name}
        />
        <Input
          name="price"
          className="mt-5"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          value={product.price}
        />
        <Input
          name="image"
          className="mt-5"
          type="text" //file?
          placeholder="Image"
          onChange={handleChange}
          value={product.image}
        />
        <Input
          name="quantity"
          className="mt-5"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          value={product.quantity}
        />
        <Input
          name="description"
          className="mt-5"
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={product.description}
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
    </>
  )
}
