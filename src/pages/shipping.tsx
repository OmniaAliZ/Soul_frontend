import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

export function Shipping() {
  return (
    <>
      <NavBar />
      <div className=" flex flex-col my-8 ml-10 gap-10">
        <h1 className=" font-bold text-4xl">Shipping Information</h1>
        <p>
          At Soul, we aim to deliver your plants in the best condition possible. Please read through
          our shipping information to understand our processes and policies.
        </p>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">Shipping Rates & Times</h2>
          <p>
            We offer standard shipping on all orders. The shipping rates and estimated delivery
            times are as follows:
          </p>
          <ul>
            <li>Standard Shipping (5-7 business days): $5.99</li>
            <li>Expedited Shipping (2-3 business days): $12.99</li>
            <li>Next Day Shipping (1 business day): $19.99</li>
          </ul>
        </section>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">Order Processing</h2>
          <p>
            Orders are processed Monday through Friday. Orders placed on weekends and holidays will
            be processed the next business day. Please allow 1-2 business days for order processing.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">Packaging</h2>
          <p>
            We take great care in packaging your plants to ensure they arrive in perfect condition.
            Each plant is carefully wrapped and cushioned to protect it during transit.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">International Shipping</h2>
          <p>
            Currently, we only ship within the United States. We are working to expand our shipping
            options to include international destinations in the near future.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">Tracking Your Order</h2>
          <p>
            Once your order has shipped, you will receive a confirmation email with a tracking
            number. You can use this number to track your order on our shipping partners website.
          </p>
        </section>
        <Separator />
        <section>
          <h2 className=" text-2xl font-semibold mb-2">Returns & Exchanges</h2>
          <p>
            If you have any issues with your order, please visit our
            <Link to="">Returns & Exchanges</Link> page for more information on our policies and how
            to initiate a return or exchange.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}
