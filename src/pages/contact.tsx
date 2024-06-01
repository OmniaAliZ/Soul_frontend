import { Footer } from "@/components/footer"
import { NavBar } from "@/components/navBar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <>
      <NavBar />
      <h1 className="text-4xl font-semibold my-6 text-center">Contact Us</h1>
      <p className="text-lg mb-6 text-[#47523f] text-center">
        We would love to hear from you! Please fill out the form below or reach us through the
        provided contact information.
      </p>

      <div className="flex flex-col md:flex-row gap-6 mx-auto">
        {/* <!-- Contact Form --> */}
        <Card className=" container p-6 rounded-lg shadow-sm flex-1 mx-28 mb-20">
          <form>
            <div className="mb-4">
              <Label htmlFor="name" className="block text-lg font-medium text-[#47523f] mb-2">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" className="block text-lg font-medium text-[#47523f] mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="message" className="block text-lg font-medium text-[#47523f] mb-2">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              ></Textarea>
            </div>
            <Button type="submit" className=" py-3 px-6 rounded-lg transition duration-300">
              Send Message
            </Button>
          </form>
        </Card>

        {/* <!-- Contact Information --> */}
        {/* <Card className=" container flex-1 mr-8 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Contact Information</h2>
          <p className="text-base mb-4">
            <strong>Address:</strong> 123 Plant Lovers Lane, Green City, GA 12345
          </p>
          <p className="text-base mb-4">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-base mb-4">
            <strong>Email:</strong> support@plantswebsite.com
          </p>
          <p className="text-base mb-4">
            <strong>Business Hours:</strong> Mon - Fri: 9 AM - 5 PM EST
          </p>
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.49h-1.27c-1.25 0-1.64.78-1.64 1.58v1.84h2.78l-.44 2.9h-2.34v6.98c4.78-.75 8.44-4.89 8.44-9.88 0-5.53-4.47-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M22.46 6.003c-.77.34-1.6.57-2.46.67.88-.53 1.55-1.37 1.87-2.37-.83.49-1.75.85-2.73 1.05-.79-.84-1.9-1.36-3.14-1.36-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.68.11 1-3.57-.18-6.73-1.89-8.85-4.49-.37.63-.58 1.37-.58 2.15 0 1.48.75 2.79 1.9 3.56-.7-.02-1.36-.21-1.93-.53v.05c0 2.07 1.48 3.8 3.44 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.95-1.45 1.14-3.28 1.82-5.28 1.82-.34 0-.67-.02-1-.06 1.88 1.2 4.1 1.9 6.5 1.9 7.79 0 12.05-6.45 12.05-12.05 0-.18 0-.35-.01-.53.83-.6 1.55-1.34 2.12-2.19z" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.49h-1.27c-1.25 0-1.64.78-1.64 1.58v1.84h2.78l-.44 2.9h-2.34v6.98c4.78-.75 8.44-4.89 8.44-9.88 0-5.53-4.47-10-10-10z" />
              </svg>
            </a>
            <a href="#" className="text-green-600 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.25.2 2.25.2v2.49h-1.27c-1.25 0-1.64.78-1.64 1.58v1.84h2.78l-.44 2.9h-2.34v6.98c4.78-.75 8.44-4.89 8.44-9.88 0-5.53-4.47-10-10-10z" />
              </svg>
            </a>
          </div>
        </Card> */}
      </div>
      <Footer />
    </>
  )
}
