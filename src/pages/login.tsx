import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { EyeIcon, EyeOffIcon, MailIcon } from "lucide-react"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import api from "@/api"
import { GlobalContext } from "@/App"
import { reshapeUser } from "@/lib/utils"
import jwtDecode from "jwt-decode"
import { NavBar } from "@/components/navBar"
import { Separator } from "@/components/ui/separator"
import { Footer } from "@/components/footer"
//!!!!!!DESIGN?????
export function Login() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { handleStoreUser } = provider

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleLogin = async () => {
    try {
      const res = await api.post("/users/login", user)
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
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const token = await handleLogin()
    if (token) {
      const decodedToken = jwtDecode(token)
      const user = reshapeUser(decodedToken)
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      handleStoreUser(user)
      navigate("/")
    }
  }

  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <NavBar />
      <Separator />
      <div className="flex flex-col items-center py-14 min-h-fit bg-[url('../images/pg.png')] px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-full bg-primary-500 px-4 py-2 text-sm text-[#728b6d]">
              Join our growing community
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-[#728b6d]">
              Unlock Your Potential with Our Innovative Platform
            </h1>
            <p className="text-[#728b6d]">
              Create your account and start exploring our cutting-edge features.
            </p>
          </div>
          <form action="POST" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <Label className="text-[#47523f]" htmlFor="email">
                Email
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
              <Label className="text-[#47523f]" htmlFor="password">
                Password
              </Label>
              <div className="relative">
                <Input
                  className="rounded-full border-2 border-gray-300 bg-gray-50 px-4 py-3 pr-10 text-gray-900 focus:border-primary-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
                <div
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4"
                >
                  {showPassword === true && (
                    <EyeIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
                  )}
                  {showPassword === false && (
                    <EyeOffIcon className="h-5 w-5 text-gray-500 hover:text-gray-700 dark:text-gray-400" />
                  )}
                </div>
              </div>
            </div>

            <Button
              className="w-full rounded-full px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-600"
              type="submit"
            >
              Sign In
            </Button>
          </form>
          <div className="text-center flex justify-center gap-2 text-sm text-[#47523f]">
            <Link
              className="font-medium text-primary-500 underline underline-offset-2 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
              to="/"
            >
              Forgot Password?
            </Link>
            <Link
              className="font-medium text-primary-500 underline underline-offset-2 hover:text-primary-400 dark:text-primary-400 dark:hover:text-primary-300"
              to="/signup"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
