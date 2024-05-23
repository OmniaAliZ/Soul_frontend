import * as React from "react"
import { ShoppingCartIcon } from "lucide-react"
import { useContext } from "react"
import { GlobalContext } from "@/App"

import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "./ui/sheet"
import { OrderCheckout, Product } from "@/types"
import api from "@/api"

export function Cart() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleDeleteFromCart, handleAddToCart, handleRemoveCart } = provider

  const groups = state.cart.reduce((acc, obj) => {
    const key = obj.id
    const curGroup = acc[key] ?? []
    return { ...acc, [key]: [...curGroup, obj] }
  }, {} as { [key: string]: Product[] })

  const keys = Object.keys(groups)

  const total = state.cart.reduce((acc, curr) => {
    return acc + curr.price
  }, 0)

  const checkoutOrder: OrderCheckout = {
    addressId: "",
    items: []
  }

  Object.keys(groups).forEach((key) => {
    const products = groups[key]
    checkoutOrder.items.push({
      quantity: products.length,
      productId: key
    })
  })

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await api.post("/orders/chockout", checkoutOrder, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(res.status===201){
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
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full" size="icon" variant="outline">
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
            <Badge className="absolute mb-7 ml-10 rounded-full bg-red-500 py-1 text-xs text-white">
              {Object.keys(groups).length}
            </Badge>
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 overflow-auto px-4 py-6 max-h-[80vh]">
            {state.cart.length === 0 && <p>NO ITEMS</p>}
            {keys.map((key) => {
              const products = groups[key]
              const product = products[0]
              const totalForEach = products.reduce((acc, curr) => {
                return acc + curr.price
              }, 0)
              return (
                <div key={product.id} className="grid grid-cols-[64px_1fr_auto] items-center gap-4">
                  <img
                    alt={product.name}
                    className="rounded-md object-cover"
                    height={64}
                    src={product.image}
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover"
                    }}
                    width={64}
                  />
                  <div className="grid gap-1">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => handleDeleteFromCart(product.id)}
                        size="sm"
                        variant="outline"
                      >
                        -
                      </Button>
                      <span>{products.length}</span>
                      <Button onClick={() => handleAddToCart(product)} size="sm" variant="outline">
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="text-right font-medium">$ {totalForEach.toFixed(2)}</div>
                </div>
              )
            })}
          </div>
          <SheetFooter className="border-t px-4 py-6">
            <div className="flex flex-col">
              <div className="flex items-center justify-center">
                <span className="text-2xl font-semibold">Total: </span>
                <span className="text-2xl font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="mt-4 flex gap-2">
              <SheetClose asChild>
                <Button className="flex-1 w-40" variant="outline">
                  Continue Shopping
                </Button></SheetClose>
                <Button onClick={handleCheckout} className="flex-1 w-40">
                  Checkout
                </Button>
              </div>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
