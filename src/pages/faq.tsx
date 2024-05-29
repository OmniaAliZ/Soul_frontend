import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"

export function FAQ() {
  return (
    <>
      <NavBar />
      <div className="container mt-8 mb-20 mx-auto p-6">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="text-xl text-[#728b6d] mt-4">
            Find answers to common questions about our plants and services.
          </p>
        </header>

        <section>
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">General Questions</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                1. What types of plants do you offer?
              </h3>
              <p className="text-[#47523f]">
                We offer a wide variety of indoor and outdoor plants, including succulents, tropical
                plants, herbs, and flowering plants. Our selection is carefully curated to ensure
                high quality and suitability for different environments.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                2. How do I care for my new plant?
              </h3>
              <p className="text-[#47523f]">
                Each plant comes with a care guide that includes specific instructions for watering,
                light requirements, and other care tips. You can also visit our Plant Care Tips
                section on the website for detailed information.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                3. Do you offer a guarantee on your plants?
              </h3>
              <p className="text-[#47523f]">
                Yes, we offer a 30-day guarantee on all our plants. If you encounter any issues with
                your plant, please contact our customer service team for assistance.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Shipping and Delivery</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                1. How long does shipping take?
              </h3>
              <p className="text-[#47523f]">
                Shipping times vary depending on your location. Generally, orders are processed
                within 1-2 business days and shipping takes 3-7 business days. You will receive a
                tracking number once your order has been shipped.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                2. How are the plants packaged for shipping?
              </h3>
              <p className="text-[#47523f]">
                Our plants are carefully packaged to ensure they arrive in perfect condition. We use
                secure packaging materials and include care instructions to help you get started
                with your new plant.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                3. Do you ship internationally?
              </h3>
              <p className="text-[#47523f]">
                Currently, we only ship within the United States. We are working on expanding our
                shipping options and hope to offer international shipping in the near future.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Orders and Payments</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                1. What payment methods do you accept?
              </h3>
              <p className="text-[#47523f]">
                We accept all major credit cards, including Visa, MasterCard, American Express, and
                Discover. You can also pay using PayPal.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">2. How can I track my order?</h3>
              <p className="text-[#47523f]">
                Once your order has been shipped, you will receive a confirmation email with a
                tracking number. You can use this number to track your order on our website or the
                carriers website.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                3. Can I cancel or change my order?
              </h3>
              <p className="text-[#47523f]">
                If you need to cancel or change your order, please contact our customer service team
                as soon as possible. We will do our best to accommodate your request, but please
                note that once an order has been processed, it cannot be changed or canceled.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Returns and Exchanges</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                1. What is your return policy?
              </h3>
              <p className="text-[#47523f]">
                We offer a 30-day return policy for all our plants. If you are not satisfied with
                your purchase, you can return it within 30 days for a full refund or exchange.
                Please contact our customer service team to initiate a return.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                2. How do I return or exchange a plant?
              </h3>
              <p className="text-[#47523f]">
                To return or exchange a plant, please contact our customer service team for
                instructions. We will provide you with a return shipping label and guide you through
                the process.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-[#728b6d]">
                3. What if my plant arrives damaged?
              </h3>
              <p className="text-[#47523f]">
                If your plant arrives damaged, please contact us immediately. We will either replace
                the plant or issue a full refund, depending on your preference.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
