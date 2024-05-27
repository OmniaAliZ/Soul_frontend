import { Category } from "@/types"
import { useQuery } from "@tanstack/react-query"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "./ui/table"
import categoryService from "../api/categories"
import { EditCategory } from "./editCategory"
import { DeleteCategory } from "./deleteCategory"

export function CategoriesTable() {
  const { data: categories, error } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: categoryService.getCategories
  })

  return (
    <>
      <Table className="mt-20 w-4/5 mx-auto">
        <TableCaption>A list of Categories.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">Description</TableHead>
            <TableHead className="text-left"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories?.map((category) => (
            <TableRow key={category?.id}>
              <TableCell className="text-left">{category?.name}</TableCell>
              <TableCell className="text-left">{category?.description}</TableCell>
              <TableCell className="flex justify-around">
                <EditCategory category={category} />
                <DeleteCategory category={category} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  )
}
