import api from "@/api"
import { useQuery } from "@tanstack/react-query"
import { Link, useParams } from "react-router-dom"

import { Label } from "@/components/ui/label"
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export function ProductDetails() {
  const { id } = useParams<string>()
  console.log("id in product details ", id)

  const getProductById = async (id: string | undefined) => {
    try {
      const res = await api.get(`/products/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id)
  })
  console.log("data in product details", data)

  if (isPending) {
    return <p>Data is fetching ....</p>
  }
  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">{data.name}</h1>
            <div className="flex justify-center gap-4">
              <div className="text-4xl font-bold">${data.price}</div>
            </div>
            <div>
              <p>{data.description}</p>
            </div>
          </div>
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2 justify-center">
              <Label className="text-base" htmlFor="quantity">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg">Add to Cart</Button>
          </form>
        </div>
        <div className="grid gap-4">
          <img
            alt={data.name}
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
            height={600}
            src={data.image}
            width={600}
          />
        </div>
      </div>

      {/*  */}

      <section className="w-full py-12">
        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">People also like</h1>
              {/* <p className="text-gray-500 dark:text-gray-400">Invite nature into your living space</p> */}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="relative group">
              <Link className="absolute inset-0 z-10" to="">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Cozy Blanket"
                className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                height={200}
                src="/placeholder.svg"
                width={200}
              />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Cozy Blanket</h3>
                <small className="text-sm leading-none text-gray-500 dark:text-gray-400">
                  Warm and Soft for Chilly Nights
                </small>
                <h4 className="font-semibold">$29.99</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
