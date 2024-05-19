import { GlobalContext } from "@/App"
import api from "@/api"
import { NavBar } from "@/components/navBar"
import { Hero } from "@/components/hero"
import { Search } from "@/components/search"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"
import { Link } from "react-router-dom"

export function Home() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { handleAddToCart } = provider //state?
  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  // Queries
  const { data, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <h1 className="text-2xl uppercase mb-10">Products</h1>
      <Search />
      {data?.length === 0 && <p>NO PRODUCTS FOUND</p>}
      <section className="flex flex-col md:flex-row gap-4 justify-between max-w-6xl mx-auto flex-wrap">
        {data?.map((product) => (
          <Card key={product.id} className="w-[350px]">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              {/* <CardDescription>Some Description here</CardDescription> */}
            </CardHeader>
            <CardContent>
              {/* <p>Card Content Here</p> */}
              <img
                alt="Product Image"
                className="object-cover w-full h-full"
                height="300"
                src={product.image}
                style={{ aspectRatio: "400/300", objectFit: "contain" }}
                width="400"
              />
            </CardContent>
            <CardFooter className="flex flex-col">
              <Link to={`products/${product.id}`}>View Details</Link>
              <Button className="w-full" onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  )
}
