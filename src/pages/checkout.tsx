import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import api from "@/api"
import { Address, OrderCheckout, Product } from "@/types"
import { GlobalContext } from "@/App"
import { useContext, useState } from "react"
import { NavBar } from "@/components/navBar"
import { Footer } from "@/components/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export function Checkout() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleRemoveCart } = provider

  console.log("USER:", state.user)

  const checkoutOrder: OrderCheckout = {
    addressId: "",
    items: []
  }
  const groups = state.cart.reduce((acc, obj) => {
    const key = obj.id
    const curGroup = acc[key] ?? []
    return { ...acc, [key]: [...curGroup, obj] }
  }, {} as { [key: string]: Product[] })

  const keys = Object.keys(groups)

  const total = state.cart.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)
  Object.keys(groups).forEach((key) => {
    const products = groups[key]
    checkoutOrder.items.push({
      quantity: products.length,
      productId: key
    })
  })
  const getAddressesById = async (id: string | undefined) => {
    try {
      const res = await api.get(`/addresses/user/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const { data: addresses } = useQuery<Address[]>({
    queryKey: ["addresses", state.user?.nameidentifier],
    queryFn: () => getAddressesById(state.user?.nameidentifier)
  })

  let defaultAddress = ""
  if (addresses && addresses?.length > 0) {
    if (addresses[0].id) {
      defaultAddress = addresses[0].id
    }
  }
  const [selectedAddress, setSelectedAddress] = useState(defaultAddress)

  const handleRadioChange = (value: string) => {
    console.log("value", value)

    setSelectedAddress(value)
  }
  const handleCheckout = async () => {
    try {
      checkoutOrder.addressId = selectedAddress
      const token = localStorage.getItem("token")

      const res = await api.post("/orders/checkout", checkoutOrder, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 201) {
        handleRemoveCart()
      }
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const [address, setAddress] = useState({
    country: "",
    city: "",
    street: "",
    zip_code: 0
  })

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAddress({ ...address, [name]: value })
    console.log(name, value)
  }
  const postAddress = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await api.post("/addresses", address, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const queryClient = useQueryClient()

  const handleAddressSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await postAddress()
    queryClient.invalidateQueries({ queryKey: ["addresses"] })
  }
  console.log("ID ADDRESS", selectedAddress, "ORder")

  return (
    <>
      <NavBar />
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_400px] gap-8 items-start p-4 md:p-8 lg:p-12">
        <div className="border rounded-lg bg-white dark:bg-gray-950 shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-semibold">Your Cart</h2>
          </div>
          <div className="p-6 space-y-4">
            {keys.map((key) => {
              const products = groups[key]
              const product = products[0]
              const totalForEach = products.reduce((acc, curr) => {
                return acc + curr.price
              }, 0)
              return (
                <div key={product.id} className="grid grid-cols-[80px_1fr_80px] items-center gap-4">
                  <img
                    alt={product.name}
                    className="rounded-md"
                    height="80"
                    src={product.image}
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover"
                    }}
                    width="80"
                  />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Quantity : {products.length}
                    </p>
                  </div>
                  <div className="text-right font-medium">${totalForEach}</div>
                </div>
              )
            })}
            <Separator />
            <div className="grid grid-cols-[1fr_80px] items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400">Subtotal</p>
              <div className="text-right font-medium">${total}</div>
            </div>
            <div className="grid grid-cols-[1fr_80px] items-center gap-4">
              <p className="text-gray-500 dark:text-gray-400">Shipping</p>
              <div className="text-right font-medium">$5.00</div>
            </div>
            <Separator />
            <div className="grid grid-cols-[1fr_80px] items-center gap-4">
              <p className="text-lg font-semibold">Total</p>
              <div className="text-right text-lg font-semibold">${total + 5}</div>
            </div>
          </div>
        </div>
        <div className="border rounded-lg bg-white dark:bg-gray-950 shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="text-xl font-semibold">Checkout</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid gap-2">
              <Label className="text-left font-bold" htmlFor="name">
                Name
              </Label>
              <Input disabled id="name" value={state.user?.name} placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label className="text-left font-bold" htmlFor="email">
                Email
              </Label>
              <Input
                disabled
                id="email"
                value={state.user?.emailaddress}
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <Separator />
              <Label className="mt-3 text-left font-bold" htmlFor="address">
                Address :
              </Label>
              {addresses && addresses?.length > 0 && (
                <RadioGroup
                  aria-label="Address"
                  onValueChange={handleRadioChange}
                  defaultValue={addresses[0].id} // using  value ??? 
                  defaultChecked
                  className="grid gap-4 my-4"
                >
                  {addresses?.map((address) => {
                    return (
                      <div key={address.id} className="flex items-center gap-2">
                        <RadioGroupItem id={address.id} value={address.id} />
                        <Label
                          className="flex items-center gap-2 cursor-pointer"
                          htmlFor={address.id}
                        >
                          {address.country} - {address.city} - {address.street}
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              )}
              {addresses?.length === 0 && (
                <form onSubmit={handleAddressSubmit}>
                  <div className="grid gap-2 mt-3">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      onChange={handleAddressChange}
                      name="country"
                      id="country"
                      placeholder="Enter your country"
                    />
                  </div>
                  <div className="grid gap-2 mt-3">
                    <Label htmlFor="city">City</Label>
                    <Input
                      onChange={handleAddressChange}
                      name="city"
                      id="city"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div className="grid gap-2 mt-3">
                    <Label htmlFor="street">Street</Label>
                    <Input
                      onChange={handleAddressChange}
                      name="street"
                      id="street"
                      placeholder="Enter your street"
                    />
                  </div>
                  <Button className="w-full mt-2" type="submit">
                    Add Address
                  </Button>
                </form>
              )}
            </div>
            <div className="grid gap-2">
              <Separator />
              <Label className="mt-3 text-left font-bold" htmlFor="address">
                Address :
              </Label>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="0000 0000 0000 0000" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="expiry">Expiry</Label>
                <Input id="expiry" placeholder="MM/YY" type="text" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" type="text" />
              </div>
            </div>
            <Link to="/thankyou">
              <Button onClick={handleCheckout} className="w-full mt-4" type="submit">
                Place Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
