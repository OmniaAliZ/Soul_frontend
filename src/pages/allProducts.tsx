import { ChangeEvent, FormEvent, useContext, useState } from "react"
import api from "@/api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "@/types"
import { useSearchParams, Link } from "react-router-dom"
import { GlobalContext } from "@/App"
import { EyeIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { NavBar } from "@/components/navBar"
import { Footer } from "@/components/footer"
//!!!!!!!! HOW TO DELETE (SEARCH BY) FROM QUERY ?????????
////!!!!!!!!! WHEN MD PICS GET HUUUUGEEEE????

export function AllProducts() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleAddToCart } = provider

  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultSearch = searchParams.get("searchBy") || ""
  const [searchBy, setSearchBy] = useState(defaultSearch)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

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
    if (searchBy) {
      setSearchParams({ ...searchParams, searchBy: searchBy })
    } else {
      setSearchParams({ ...searchParams })
    }
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }
  const handleQuantityChange = (value: string) => {
    setSelectedQuantity(Number(value))
  }

  return (
    <>
      <NavBar />
      <div className="pb-16">
        <div className=" px-2">
          <form className="flex gap-4 w-full mt-10 md:w-1/2 mx-auto mb-10" onSubmit={handleSearch}>
            <Input
              value={searchBy}
              name="searchBy"
              type="search"
              onChange={handleChange}
              placeholder="Search..."
            />
            <Button type="submit">Search</Button>
          </form>
          <h1 className=" text-5xl font-bold mt-8 uppercase mb-10">All Products</h1>
        </div>
        {data?.length === 0 && <p>NO PRODUCTS FOUND</p>}
        <section className="flex flex-col justify-center md:flex-row gap-8 max-w-6xl mx-auto flex-wrap">
          {data?.map((product) => {
            const products = state.cart.filter((p) => p.id === product.id)
            const inStock = product.quantity > products.length

            const groups = state.cart.reduce((acc, obj) => {
              const key = obj.id
              const curGroup = acc[key] ?? []
              return { ...acc, [key]: [...curGroup, obj] }
            }, {} as { [key: string]: Product[] })

            let updatedProductQuantity = product.quantity

            Object.keys(groups).forEach((key) => {
              const products = groups[key]
              const foundProductId = key == product.id
              if (foundProductId) {
                updatedProductQuantity = product.quantity - products.length
              }
            })
            let availableQuantity = 0
            if (updatedProductQuantity) {
              availableQuantity = updatedProductQuantity < 5 ? updatedProductQuantity : 5
            }
            const select = [...Array(availableQuantity).keys()]

            return (
              <div
                key={product.id}
                className="rounded-2xl mx-auto border-b-2 shadow-sm shadow-[#98a391] border-[#98a391] w-[350px] md:w-[250px] overflow-hidden group hover:shadow-lg hover:shadow-[#98a391] transition-all"
              >
                <div className="relative">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover "
                    height={400}
                    src={product.image}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover"
                    }}
                    width={400}
                  />
                  <Link
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md group-hover:bg-gray-100 transition-colors dark:bg-gray-800 dark:group-hover:bg-gray-700"
                    to={`products/${product.id}`}
                  >
                    <EyeIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <span className="sr-only">View Details</span>
                  </Link>
                </div>
                <div className="p-6 grid gap-4">
                  <div className="flex flex-col items-center justify-between">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-base font-semibold">$ {product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Select onValueChange={handleQuantityChange} defaultValue="1">
                      <SelectTrigger>
                        <SelectValue placeholder="Qty" />
                      </SelectTrigger>
                      <SelectContent className="w-24">
                        {select?.map((x) => {
                          const value = ++x
                          return (
                            <SelectItem value={value.toString()} key={value}>
                              {value}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                    <Button
                      disabled={!inStock}
                      onClick={() => {
                        const quantities = [...Array(selectedQuantity).keys()]

                        quantities.map(() => {
                          handleAddToCart(product)
                        })
                      }}
                      className="flex-1"
                    >
                      {inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </section>
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
      <Footer />
    </>
  )
}
