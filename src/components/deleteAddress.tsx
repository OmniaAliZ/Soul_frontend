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
import { Address } from "@/types"
import { useQueryClient } from "@tanstack/react-query"

export function DeleteAddress({ address }: { address: Address }) {
  if (!address) throw Error("No address delete")
  const deleteAddress = async () => {
    try {
      const res = await api.delete(`/addresses/${address.id}`)
      console.log("DELETED")

      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const queryClient = useQueryClient()
  const handleDelete = async () => {
    await deleteAddress()
    queryClient.invalidateQueries({ queryKey: ["addresses"] })
    // window. location.reload();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Address</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to delete :{" "}
            <b>
              {" "}
              {address.country} - {address.city} - {address.street}{" "}
            </b>{" "}
            ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">This action can not be undone.</Label>
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
