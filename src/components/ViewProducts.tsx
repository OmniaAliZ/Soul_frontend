import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { Input } from "./ui/input"
import api from "@/api"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "@/types"
import { Button } from "./ui/button"
import { useSearchParams, Link } from "react-router-dom"
import { GlobalContext } from "@/App"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { EyeIcon } from "lucide-react"
//!!!!!!!! HOW TO DELETE (SEARCH BY) FROM QUERY ?????????
////!!!!!!!!! WHEN MD PICS GET HUUUUGEEEE????
export function ViewProducts() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleAddToCart } = provider

  const queryClient = useQueryClient()
  const [searchParams, setSearchParams] = useSearchParams()
  const defaultSearch = searchParams.get("searchBy") || ""
  const [searchBy, setSearchBy] = useState(defaultSearch)

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

  return (
    <div>
      <div className=" px-2">
        <form className="flex gap-4 w-full md:w-1/2 mx-auto mb-10" onSubmit={handleSearch}>
          <Input
            value={searchBy}
            name="searchBy"
            type="search"
            onChange={handleChange}
            placeholder="Search..."
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
      {data?.length === 0 && <p>NO PRODUCTS FOUND</p>}
      <section className="flex flex-col justify-center md:flex-row gap-4 max-w-6xl mx-auto flex-wrap">
        {data?.map((product) => {
          const products = state.cart.filter((p) => p.id === product.id)
          const inStock = product.quantity > products.length

          return (
            <div
              key={product.id}
              className="rounded-2xl mx-auto w-[350px] overflow-hidden dark:bg-gray-950 group hover:border-2 hover:border-gray-200 dark:hover:border-gray-700 transition-all"
            >
              <div className="relative">
                <img
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
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
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-xl font-semibold">$ {product.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Select defaultValue="1">
                    <SelectTrigger>
                      <SelectValue placeholder="Qty" />
                    </SelectTrigger>
                    <SelectContent className="w-24">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    disabled={!inStock}
                    onClick={() => handleAddToCart(product)}
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
  )
}
