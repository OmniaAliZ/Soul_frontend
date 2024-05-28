import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"

export function Return() {
  return (
    <>
      <NavBar />
      <div className="mx-auto p-6 mt-10">
        <h1 className="text-4xl font-semibold mb-6 text-center">Returns & Exchanges</h1>
        <p className="text-lg mb-6">
          We want you to be completely satisfied with your purchase. If you are not happy with your
          order, please read our returns and exchanges policy below.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          <p className="text-base mb-4">
            If you are not satisfied with your purchase, you may return it within 30 days of receipt
            for a full refund or exchange. The item must be in its original condition and packaging.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact our customer service to initiate a return.</li>
            <li>Pack the item securely in the original package, if possible.</li>
            <li>Include the return form or a copy of the receipt.</li>
            <li>Ship the return package to the address provided by our customer service.</li>
          </ul>
          <p className="text-base">
            Please note that return shipping costs are the responsibility of the customer, unless
            the return is due to our error (e.g., you received an incorrect or defective item).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Exchange Policy</h2>
          <p className="text-base mb-4">
            If you would like to exchange your purchase for a different item, you may do so within
            30 days of receipt. The item must be in its original condition and packaging.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Contact our customer service to initiate an exchange.</li>
            <li>Pack the item securely in the original package, if possible.</li>
            <li>Include the exchange form or a copy of the receipt.</li>
            <li>Ship the exchange package to the address provided by our customer service.</li>
          </ul>
          <p className="text-base">
            Please note that return shipping costs for exchanges are the responsibility of the
            customer, unless the exchange is due to our error (e.g., you received an incorrect or
            defective item).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold  mb-4">Refunds</h2>
          <p className="text-base mb-4">
            Refunds will be processed within 7-10 business days of receiving your return. Refunds
            will be issued to the original form of payment.
          </p>
          <p className="text-base">
            If you do not receive your refund within the expected time frame, please contact our
            customer service for assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
          <p className="text-base mb-4">
            If you receive a damaged or defective item, please contact our customer service
            immediately. We will arrange for a replacement or refund.
          </p>
          <p className="text-base">
            We may request photos of the damaged or defective item to process your claim.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}
