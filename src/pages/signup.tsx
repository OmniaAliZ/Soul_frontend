import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { EyeIcon, MailIcon, PhoneIcon, UserIcon } from "lucide-react"
import api from "@/api"
import { ChangeEvent, FormEvent, useState } from "react"
//!!!!!!DESIGN?????
export function Signup() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: ""
  })
  const handleSignup = async () => {
    try {
      const res = await api.post("/users/signup", user)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
    console.log(name, ": ", value)
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const response = await handleSignup()
    if (response) {
      navigate("/login")
    }
  }
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 p-8 dark:bg-gray-950 min-h-screen">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-4 text-center">
          <div className="inline-block rounded-full bg-primary-500 px-4 py-2 text-sm text-white">
            Join our growing community
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Unlock Your Potential with Our Innovative Platform
          </h1>
          <p className="text-gray-200">
            Create your account and start exploring our cutting-edge features.
          </p>
        </div>
        <form action="POST" onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label className="text-gray-200" htmlFor="name">
              Full Name
            </Label>
            <div className="relative">
              <Input
                className="rounded-full border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <UserIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-gray-200" htmlFor="email">
              Email Address
            </Label>
            <div className="relative">
              <Input
                className="rounded-full border-2 border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                onChange={handleChange}
                type="email"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <MailIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <Label className="text-gray-200" htmlFor="password">
              Password
            </Label>
            <div className="relative">
              <Input
                className="rounded-full border-2 border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-gray-900 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                id="password"
                name="password"
                placeholder="Enter a secure password"
                required
                onChange={handleChange}
                type="password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <EyeIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-gray-200" htmlFor="password">
              Phone Number
            </Label>
            <div className="relative">
              <Input
                className="rounded-full border-2 border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-gray-900 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                required
                type="number"
                onChange={handleChange}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <PhoneIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
              </div>
            </div>
          </div>

          <Button
            className="w-full rounded-full bg-primary-500 px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
        <div className="text-center text-sm text-gray-300">
          Already have an account?
          <Link
            className="font-medium text-primary-500 underline underline-offset-2 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
            to="/login"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}