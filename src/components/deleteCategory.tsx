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
import { Category } from "@/types"
import { useQueryClient } from "@tanstack/react-query"

export function DeleteCategory({ category }: { category: Category }) {
  if (!category) throw Error("No User delete")

  const deleteCategory = async () => {
    try {
      const res = await api.delete(`/categories/${category.id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const queryClient = useQueryClient()

  const handleDelete = async () => {
    await deleteCategory()
    queryClient.invalidateQueries({ queryKey: ["categories"] })
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Category</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to delete <b>{category.name}</b> ?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <Label htmlFor="name">
              This action can not be undone.
              <br />
              This will permanently delete the category and remove it from the server.
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
