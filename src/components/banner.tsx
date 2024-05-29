export function Banner() {
  return (
    <section className="w-full py-16 mt-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className=" flex flex-col justify-center space-y-8">
            <h1 className="text-8xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Indoor Greenery
            </h1>
            <p className=" mx-auto text-[#47523f] md:text-xl ">
              {/* Purify Your Air, Boost Your Mood, and Enhance Your Home’s Beauty */}
              Improve Your Air Quality, Enhance Your Mental Well-being, Boost Productivity, and Add
              Natural Beauty to Your Home
            </p>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src="https://www.thespruce.com/thmb/qF55B-LJUhRAqFhy59Q5CSv9yHQ=/2124x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1227368676-94e3bd320a5a47dbafc87657344ac918.jpg"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
