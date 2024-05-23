import { NavBar } from "@/components/navBar"
import { ViewProducts } from "@/components/ViewProducts"

export function Home() {
  return (
    <>
      <NavBar />
      {/* <Hero /> */}
      <h1 className="text-2xl uppercase mb-10">Products</h1>
      <ViewProducts />
    </>
  )
}
