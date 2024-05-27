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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ROLE, User } from "@/types"
import { useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

export function EditUser({ user }: { user: User }) {
  if (!user) throw Error("No user edit")

  const queryClient = useQueryClient()
  const [updatedUser, setUpdatedUser] = useState(user)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUpdatedUser({ ...updatedUser, [name]: value })
  }
  const patchUser = async () => {
    try {
      const res = await api.patch(`/users/${updatedUser.id}`, updatedUser)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const handleUpdate = async () => {
    await patchUser()
    queryClient.invalidateQueries({ queryKey: ["users"] })
  }
  const handleRole = (value: string) => {
    console.log(value)
    setUpdatedUser({ ...updatedUser, role: value })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Make changes to your user here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue={user.fullName}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              defaultValue={user.email}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              defaultValue={user.phone}
              className="col-span-3"
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Role
            </Label>
            <Select defaultValue="Customer" onValueChange={handleRole}>
              <SelectTrigger className="col-span-3" name="categoryId">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key={ROLE.Customer} value={ROLE.Customer}>
                  Customer
                </SelectItem>
                <SelectItem key={ROLE.Admin} value={ROLE.Admin}>
                  Admin
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleUpdate}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
