import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl space-y-6 text-center">
          <div className="inline-block rounded-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-600 dark:bg-green-900 dark:text-green-400">
            Discover the Beauty
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Explore Our Lush, Vibrant Plants
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
            Immerse yourself in the natural wonder of our carefully curated selection.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-600"
              to="#"
            >
              Shop Now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-green-500 bg-transparent px-6 text-sm font-medium text-green-500 shadow-sm transition-colors hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:border-green-600 dark:text-green-600 dark:hover:bg-green-600 dark:hover:text-white"
              to="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
