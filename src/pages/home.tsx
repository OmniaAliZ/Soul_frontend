import { Banner } from "@/components/banner"
import { BestSeller } from "@/components/bestSeller"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { NavBar } from "@/components/navBar"
import { ViewProducts } from "@/components/ViewProducts"

export function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <BestSeller />
      <Banner />
      <ViewProducts />
      <Footer />
    </>
  )
}
