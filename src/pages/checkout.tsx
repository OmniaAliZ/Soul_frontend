import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import api from "@/api"
import { Address, OrderCheckout, Product } from "@/types"
import { GlobalContext } from "@/App"
import { ChangeEvent, useContext, useState } from "react"
import { NavBar } from "@/components/navBar"
import { Footer } from "@/components/footer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useQuery } from "@tanstack/react-query"

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
    queryKey: ["products", state.user?.nameidentifier],
    queryFn: () => getAddressesById(state.user?.nameidentifier)
  })
  const [selectedAddress, setSelectedAddress] = useState("")

  const handleRadioChange = (value: string) => {
    console.log("value", value)

    setSelectedAddress(value)
  }
  const handleCheckout = async () => {
    try {
      checkoutOrder.addressId = selectedAddress
      const token = localStorage.getItem("token")
      const res = await api.post("/orders/chockout", checkoutOrder, {
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
              <Label htmlFor="name">Name</Label>
              <Input disabled id="name" value={state.user?.name} placeholder="Enter your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                disabled
                id="email"
                value={state.user?.emailaddress}
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              {/* <Textarea id="address" placeholder="Enter your address" rows={3} /> */}
              {addresses && addresses?.length > 0 && (
                <RadioGroup
                  aria-label="Address"
                  onValueChange={handleRadioChange}
                  defaultValue={addresses[0].id}
                  className="grid gap-2"
                >
                  {addresses?.map((address) => {
                    return (
                      <div key={address.id} className="flex items-center gap-2">
                        <RadioGroupItem id={address.id} value={address.id} />
                        <Label
                          className="flex items-center gap-2 cursor-pointer"
                          htmlFor={address.id}
                        >
                          {" "}
                          {address.country} - {address.city} - {address.street}
                        </Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              )}
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
            <Button onClick={handleCheckout} className="w-full" type="submit">
              Place Order
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
