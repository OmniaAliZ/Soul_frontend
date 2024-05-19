import { ChangeEvent, FormEvent, useState } from "react"
import { Input } from "./ui/input"
import api from "@/api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "@/types"
import { Button } from "./ui/button"
import { useSearchParams } from "react-router-dom"

export function Search() {
  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()
  const deafultSearch = searchParams.get("searchBy") || ""
  const [searchBy, setSearchBy] = useState(deafultSearch)

  const getProducts = async () => {
    try {
      const res = await api.get(`/products?searchBy=${searchBy}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchBy(value)
  }
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    setSearchParams({ ...searchParams, searchBy: searchBy })
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  return (
    <div>
      <form className="flex gap-4 w-full md:w-1/2 mx-auto mb-10" onSubmit={handleSearch}>
        <Input value={searchBy} name="searchBy" type="search" onChange={handleChange} placeholder="Search..." />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
