import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import api from "@/api"
import { useQueryClient } from "@tanstack/react-query"

export function AddProduct() {
  const queryClient = useQueryClient()
  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    image: "",
    quantity: "",
    price: "",
    description: ""
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setProduct({ ...product, [name]: value })
  }

  const postProduct = async () => {
    try {
      const res = await api.post("/products", product)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postProduct()
    console.log(product)

    queryClient.invalidateQueries({ queryKey: ["products"] })
  }
  return (
    <>
      <form className="mt-20 w-1/2 mx-auto" onSubmit={handleSubmit}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Add new product
        </h2>
        <Input
          name="categoryId"
          className="mt-5"
          type="text"
          placeholder="Category"
          onChange={handleChange}
        />
        <Input
          name="name"
          className="mt-5"
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          name="price"
          className="mt-5"
          type="number"
          placeholder="Price"
          onChange={handleChange}
        />
        <Input
          name="image"
          className="mt-5"
          type="text" //file?
          placeholder="Image"
          onChange={handleChange}
        />
        <Input
          name="quantity"
          className="mt-5"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
        />
        <Input
          name="description"
          className="mt-5"
          type="text"
          placeholder="Description"
          onChange={handleChange}
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
