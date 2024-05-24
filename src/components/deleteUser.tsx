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
import { User } from "@/types"
import { useQueryClient } from "@tanstack/react-query"

export function DeleteUser({ user }: { user: User }) {
  if (!user) throw Error("No User delete")

  const deleteUser = async () => {
    try {
      const res = await api.delete(`/users/${user.id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const queryClient = useQueryClient()

  const handleDelete = async () => {
    await deleteUser()
    queryClient.invalidateQueries({ queryKey: ["users"] })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to delete <b>{user.fullName}</b> ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">
              This action can not be undone.
              <br />
              This will permanently delete the user and remove it from the server.
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
