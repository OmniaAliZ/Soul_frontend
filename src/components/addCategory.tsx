import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import api from "@/api"
import { useQueryClient } from "@tanstack/react-query"

export function AddCategory() {
  const queryClient = useQueryClient()

  const [category, setCategory] = useState({
    name: "",
    description: ""
  })

  const postCategory = async () => {
    try {
      const res = await api.post("/categories", category)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log(name, value)
    setCategory({ ...category, [name]: value })
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postCategory()
    await handleReset()
    queryClient.invalidateQueries({ queryKey: ["categories"] })
  }
  const handleReset = async () => {
    setCategory({
      name: "",
      description: ""
    })
  }
  return (
    <>
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Add new category
        </h2>

        <Input
          name="name"
          className="mt-5"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          value={category.name}
        />
        <Input
          name="description"
          className="mt-5"
          type="text"
          placeholder="Description"
          onChange={handleChange}
          value={category.description}
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
