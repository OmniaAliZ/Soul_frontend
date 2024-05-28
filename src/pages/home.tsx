import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { NavBar } from "@/components/navBar"
import { ViewProducts } from "@/components/ViewProducts"

export function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ViewProducts />
      <Footer />
    </>
  )
}
