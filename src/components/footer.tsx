import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import { Separator } from "./ui/separator"

export function Footer() {
  return (
    <footer className="bg-[#537052] py-2 px-4 md:px-6 lg:px-8">
      <div className="flex flex-col mx-auto pb-4 w-1/2">
        <h3 className="text-lg font-bold text-[#eef2ec] mb-4">Newsletter</h3>
        <p className="text-[#eef2ec] text-sm mb-4">
          Subscribe to our newsletter to stay up-to-date with our latest products and offers.
        </p>
        <form className="flex gap-2 items-center ">
          <Input
            className="flex-1 text-[#eef2ec] rounded-l-md px-4 py-2 focus:outline-none"
            placeholder="Enter your email"
            type="email"
          />
          <Button className=" rounded-r-md px-4 py-2 " type="submit">
            Subscribe
          </Button>
        </form>
      </div>
      <div className=" container grid grid-cols-1  gap-4 mb-6 md:grid-cols-4">
        <div className="flex flex-col items-start">
          <Link className="inline-flex items-center space-x-2 mb-4" to="/">
            {/* <img
              alt="Plants Website"
              height={32}
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover"
              }}
              width={32}
            /> */}
            <span className="text-lg font-bold text-[#eef2ec]">Soul</span>
          </Link>
          <p className="text-[#eef2ec] text-start text-sm mb-4">
            Our mission is to bring the joy of greenery into your home and office spaces. With our
            handpicked selection of plants, we aim to promote well-being and a connection to nature.
          </p>
          <span className="text-lg font-bold mb-4 text-[#eef2ec]">Contact Information</span>
          <p className="text-[#eef2ec] text-start text-sm mb-4">
            123 Green Street, Plant City, PC 12345
            <br /> Phone: (966) 59-000-7402 <br /> Email: support@soul.com
          </p>
          <div className="flex space-x-4">
            <Link className="text-[#eef2ec] hover:text-[#555] dark:hover:text-[#ddd]" to="#">
              <FacebookIcon className="w-5 h-5" />
            </Link>
            <Link className="text-[#eef2ec] hover:text-[#555] dark:hover:text-[#ddd]" to="#">
              <TwitterIcon className="w-5 h-5" />
            </Link>
            <Link className="text-[#eef2ec] hover:text-[#555] dark:hover:text-[#ddd]" to="#">
              <InstagramIcon className="w-5 h-5" />
            </Link>
            <Link className="text-[#eef2ec] hover:text-[#555] dark:hover:text-[#ddd]" to="#">
              <YoutubeIcon className="w-5 h-5" />
            </Link>
            <Link
              className="text-[#eef2ec] hover:text-[#555] dark:hover:text-[#ddd]"
              to="https://www.linkedin.com/in/omnia-alzahrani-b46810265/"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-start text-[#eef2ec] mb-4">Customer Service</h3>
          <div className="flex justify-start gap-8">
            <nav className="flex flex-col justify-evenly gap-4 items-baseline">
              <Link
                className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]"
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]"
                to="/shipping"
              >
                Shipping Information
              </Link>
              <Link
                className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]"
                to="/return"
              >
                Returns & Exchanges
              </Link>
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/faq">
                FAQs
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-start text-[#eef2ec] mb-4">Resources</h3>
          <div className="flex justify-start gap-8">
            <nav className="flex flex-col justify-evenly gap-4 items-baseline">
              <Link
                className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]"
                to="/care"
              >
                Plant Care Tips
              </Link>
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/">
                Blog
              </Link>
              <Link
                className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]"
                to="/planting"
              >
                Planting Guides
              </Link>
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/">
                Gift Cards
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-start text-[#eef2ec] mb-4">Legal</h3>
          <div className="flex justify-start gap-8">
            <nav className="flex flex-col justify-evenly gap-4 items-baseline">
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/">
                Privacy Policy
              </Link>
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/">
                Terms of Service
              </Link>
              <Link className="text-[#eef2ec] hover:text-[#333] dark:hover:text-[#f0f0f0]" to="/">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container mx-auto mt-2 text-center">
        <p className="text-[#eef2ec] text-sm">© 2024 Soul - Plants Website. All rights reserved.</p>
      </div>
    </footer>
  )
}
