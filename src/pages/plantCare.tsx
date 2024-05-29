import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"

export function PlantCare() {
  return (
    <>
      <NavBar />
      <div className=" my-20 ml-16">
        <h1 className="text-4xl font-semibold my-6 text-left">Plant Care Tips</h1>
        <p className=" mb-2 text-[#47523f] text-left">
          Welcome to our Plant Care Tips page! Here, you will find expert advice and practical tips
          to help you take care of your plants and ensure they thrive.
        </p>

        <section className="text-left">
          <h2 className=" text-2xl font-semibold my-6 text-left">Watering Your Plants</h2>
          <p className=" mb-2 text-[#47523f]">
            Proper watering is crucial for plant health. Here are some general guidelines:
          </p>
          <ul>
            <li>
              Check the soil moisture before watering. The top inch of soil should be dry before you
              water again.
            </li>
            <li>Water thoroughly until it drains out of the bottom of the pot.</li>
            <li>Avoid overwatering, as it can lead to root rot.</li>
            <li>Adjust watering frequency based on the season and type of plant.</li>
          </ul>
          <a href="/care-watering-plants" className="mt-8">
            -Learn More
          </a>
        </section>

        <section className="text-left">
          <h2 className=" text-2xl font-semibold my-6 text-left">Providing the Right Light</h2>
          <p className=" mb-2 text-[#47523f]">
            Light is a vital factor for plant growth. Follow these tips to ensure your plants get
            the right amount of light:
          </p>
          <ul>
            <li>Identify whether your plant needs full sun, partial shade, or indirect light.</li>
            <li>Rotate plants regularly to ensure even light exposure.</li>
            <li>Use grow lights if natural light is insufficient.</li>
            <li>
              Observe your plant for signs of too much or too little light, such as yellowing leaves
              or legginess.
            </li>
          </ul>
          <a href="/care-lighting-plants" className="mt-8">
            -Learn More
          </a>
        </section>

        <section className="text-left">
          <h2 className=" text-2xl font-semibold my-6 text-left">Feeding and Fertilizing</h2>
          <p className=" mb-2 text-[#47523f]">
            Proper nutrition helps plants grow strong and healthy. Here are some fertilizing tips:
          </p>
          <ul>
            <li>Use a balanced, water-soluble fertilizer during the growing season.</li>
            <li>Follow the recommended dosage on the fertilizer package.</li>
            <li>Reduce fertilizing during the dormant season.</li>
            <li>Organic fertilizers and compost can also provide essential nutrients.</li>
          </ul>
          <a href="/care-feeding-plants" className="mt-8">
            -Learn More
          </a>
        </section>

        <section className="text-left">
          <h2 className=" text-2xl font-semibold my-6 text-left">Pruning and Maintenance</h2>
          <p className=" mb-2 text-[#47523f]">
            Regular maintenance keeps your plants healthy and looking their best. Here are some
            pruning tips:
          </p>
          <ul>
            <li>Remove dead or yellowing leaves to prevent disease.</li>
            <li>Prune leggy or overgrown plants to encourage new growth.</li>
            <li>Use clean, sharp scissors or pruners to avoid damaging the plant.</li>
            <li>Trim flowering plants after they bloom to maintain their shape.</li>
          </ul>
          <a href="/care-pruning-plants" className="mt-8">
            -Learn More
          </a>
        </section>
      </div>
      <Footer />
    </>
  )
}
