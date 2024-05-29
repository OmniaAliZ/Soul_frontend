import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"

export function PlantingGuide() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto my-8 p-6">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold">Planting Guides</h1>
          <p className="text-xl text-[#728b6d] mt-4">
            Everything you need to know about planting and caring for your plants.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Indoor Plants</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">1. Choosing the Right Plant</h3>
            <p className="text-gray-700 mb-4">
              Select plants that are well-suited for indoor conditions, such as low light and
              humidity. Popular choices include snake plants, pothos, and peace lilies.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">2. Potting</h3>
            <p className="text-gray-700 mb-4">
              Use well-draining potting soil and a pot with drainage holes. Ensure the pot is large
              enough to accommodate the plants root system.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">3. Watering</h3>
            <p className="text-gray-700 mb-4">
              Water your indoor plants when the top inch of soil is dry. Avoid overwatering, as this
              can lead to root rot.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">4. Light</h3>
            <p className="text-gray-700 mb-4">
              Place plants in locations where they can receive appropriate light. Most indoor plants
              prefer indirect sunlight.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Outdoor Plants</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">1. Soil Preparation</h3>
            <p className="text-gray-700 mb-4">
              Prepare the soil by adding compost and ensuring it is well-drained. Test the soil pH
              to match the plants needs.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">2. Planting</h3>
            <p className="text-gray-700 mb-4">
              Dig a hole twice as wide and as deep as the plant’s root ball. Place the plant in the
              hole and fill it with soil, pressing down gently.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">3. Watering</h3>
            <p className="text-gray-700 mb-4">
              Water the plants thoroughly after planting. Continue to water regularly, especially
              during dry periods.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">4. Mulching</h3>
            <p className="text-gray-700 mb-4">
              Apply a layer of mulch around the plants to retain moisture, suppress weeds, and
              regulate soil temperature.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold mb-4">Container Gardening</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">1. Choosing Containers</h3>
            <p className="text-gray-700 mb-4">
              Select containers with drainage holes and large enough to support the plants. Consider
              materials like terracotta, plastic, or ceramic.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">2. Potting Mix</h3>
            <p className="text-gray-700 mb-4">
              Use a high-quality potting mix designed for container gardening. Avoid using garden
              soil, as it may not drain well.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">3. Planting</h3>
            <p className="text-gray-700 mb-4">
              Fill the container with potting mix, leaving space for the plants. Arrange the plants,
              ensuring their roots are covered and the soil is firmly packed.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">4. Maintenance</h3>
            <p className="text-gray-700 mb-4">
              Water container plants regularly, as they can dry out quickly. Fertilize periodically
              to provide essential nutrients.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Plant Care Tips</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">1. Pruning</h3>
            <p className="text-gray-700 mb-4">
              Regularly prune plants to remove dead or yellowing leaves and encourage healthy
              growth. Use clean, sharp tools to avoid damaging the plants.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">2. Fertilizing</h3>
            <p className="text-gray-700 mb-4">
              Feed your plants with a balanced fertilizer according to the specific needs of each
              plant. Avoid over-fertilizing, as it can harm the plants.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">3. Pest Control</h3>
            <p className="text-gray-700 mb-4">
              Inspect plants regularly for pests and treat infestations promptly with appropriate
              organic or chemical controls.
            </p>
            <h3 className="text-2xl font-bold text-[#728b6d] mb-2">4. Repotting</h3>
            <p className="text-gray-700 mb-4">
              Repot plants when they outgrow their containers to provide more space for root growth.
              Choose a slightly larger pot and fresh potting mix.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
