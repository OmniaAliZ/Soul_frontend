import api from "@/api"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Product } from "@/types"
import { useQueryClient } from "@tanstack/react-query"

export function DeleteProduct({ product }: { product: Product }) {
  const deleteProduct = async () => {
    try {
      const res = await api.delete(`/products/${product.id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    await deleteProduct()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to dekete {product.name} ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">
              This action can not be undone.
              <br />
              This will permanently delete your product and remove it from server.
            </Label>
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={() => {
              handleDelete()
            }}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
