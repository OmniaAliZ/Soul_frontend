import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navBar";

export function About(){
    return (
        <>
        <NavBar/>
        <section className="bg-cover bg-center h-96 bg-[url('https://via.placeholder.com/1200x800')]">
  <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
    <h1 className="text-4xl font-bold text-white text-center">About Us</h1>
  </div>
</section>

{/* <!-- About Us Content --> */}
<section className="py-12">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2">
        <img src="https://via.placeholder.com/600x400" alt="Our Team" className="rounded-lg shadow-lg"/>
      </div>
      <div className="lg:w-1/2 lg:pl-12 mt-6 lg:mt-0">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Soul, where our passion for plants meets a mission to bring natures beauty into every home. Our journey began with a simple idea: to make it easy and enjoyable for everyone to experience the joy of plants.
        </p>
        <p className="text-gray-700 mb-4">
          From our humble beginnings as plant enthusiasts, we have grown into a dedicated team committed to sourcing the best plants and providing exceptional customer service. We believe that plants have the power to transform spaces and enhance well-being, and we want to share that with you.
        </p>
        <p className="text-gray-700">
          Join us in celebrating the beauty of nature, and let us help you find the perfect plants to create your own green oasis.
        </p>
      </div>
    </div>
  </div>
</section>

{/* <!-- Our Mission Section --> */}
<section className="bg-gray-200 py-12">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
    <p className="text-gray-700 mb-6">
      At Soul, our mission is to make the beauty and benefits of plants accessible to everyone. We are committed to providing high-quality plants, exceptional customer service, and valuable resources to help you on your plant journey.
    </p>
    <img src="https://via.placeholder.com/1200x400" alt="Our Mission" className="rounded-lg shadow-lg mx-auto"/>
  </div>
</section>

{/* <!-- Our Values Section --> */}
<section className="py-12">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src="https://via.placeholder.com/100x100" alt="Quality" className="mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">Quality</h3>
          <p className="text-gray-700">
            We are committed to sourcing the highest quality plants to ensure you receive the best products.
          </p>
        </div>
      </div>
      <div className="lg:w-1/3 mb-8 lg:mb-0">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src="https://via.placeholder.com/100x100" alt="Sustainability" className="mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">Sustainability</h3>
          <p className="text-gray-700">
            We prioritize sustainable practices to protect the environment and promote a greener future.
          </p>
        </div>
      </div>
      <div className="lg:w-1/3">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img src="https://via.placeholder.com/100x100" alt="Community" className="mx-auto mb-4"/>
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-gray-700">
            We believe in building a community of plant lovers and sharing our knowledge and passion with you.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer/>
        </>
    )
}