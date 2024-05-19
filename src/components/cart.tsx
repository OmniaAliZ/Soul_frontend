import * as React from "react"
import { BeerIcon, DeleteIcon, ShoppingCartIcon, XCircleIcon, XSquareIcon } from "lucide-react"
import { useContext } from "react"
import { GlobalContext } from "@/App"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer"
import { Badge } from "./ui/badge"

export function Cart() {
  const provider = useContext(GlobalContext)
  if (!provider) throw Error("Context is missing")
  const { state, handleDeleteFromCart } = provider
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {/* <Button variant="outline">Open Drawer</Button> */}
        {/* <ShoppingCartIcon className="h-5 w-5" /> */}
        <Button className="rounded-full" size="icon" variant="outline">
          <ShoppingCartIcon className="h-5 w-5" />
          <span className="sr-only">Cart</span>
          <Badge className="absolute mb-7 ml-10 rounded-full bg-red-500 py-1 text-xs text-white">
            {state.cart.length}
          </Badge>
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[400px] rounded-none">
          <div className="flex flex-col mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Shopping Cart</DrawerTitle>
              <DrawerDescription>---------------------</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">List</div>
              <div className="mt-3 h-[120px]">what is this</div>
              <div>
                {state.cart.map((orderItem) => {
                  return (
                    <div className="mb-4 flex items-center gap-4" key={orderItem.id}>
                      <img
                        src={orderItem.image}
                        alt={orderItem.name}
                        className="w-10 h-10 object-contain"
                      />
                      <h4 className=" font-bold">{orderItem.name}</h4>
                      <span className=" font-bold">{orderItem.price}</span>
                      <XSquareIcon onClick={() => handleDeleteFromCart(orderItem.id)} />
                    </div>
                  )
                })}
              </div>
            </div>
            <DrawerFooter>
              <Button>Checkout</Button>
              <DrawerClose asChild>
                <Button variant="outline">Continue shopping</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}

export function CartN() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>Open Drawer</button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerOverlay className="fixed inset-0 bg-black/40" />
        <DrawerContent className="bg-white flex flex-col rounded-t-[10px] h-full w-[400px] mt-24 fixed bottom-0 right-0">
          <div className="p-4 bg-white flex-1 h-full">
            <div className="max-w-md mx-auto">
              <DrawerTitle className="font-medium mb-4">Unstyled drawer for React.</DrawerTitle>
              <p className="text-zinc-600 mb-2">
                This component can be used as a replacement for a Dialog on mobile and tablet
                devices.
              </p>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  )
}
