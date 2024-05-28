import { Button } from "@/components/ui/button"
import { HomeIcon, SparklesIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function Thankyou() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[url('../src/images/pg.png')] dark:bg-gray-900 px-4">
        <div className="max-w-md w-full space-y-6 text-center">
          <SparklesIcon className="mx-auto h-12 w-12" />
          <h1 className="text-5xl font-bold tracking-tight text-[#728b6d]">Thank You!</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {/* We appreciate your feedback. Your input helps us improve our service. */}
            Thank You for Your Purchase! We appreciate your order and are excited to send you our
            beautiful plants. <br /><br />
            Your order number is <strong>#963952</strong>
            <br /><br />
            You will receive a confirmation email with your order details shortly.
          </p>
          <div className="flex justify-center">
            <Link to="/">
              <Button>
                <HomeIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
