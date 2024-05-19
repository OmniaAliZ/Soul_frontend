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
import { Category, Product } from "@/types"
import api from "@/api"
import { EditProduct } from "./editProduct"
import { DeleteProduct } from "./deleteProduct"

export function ProductTable() {
  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const getCategories = async () => {
    try {
      const res = await api.get("/categories")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data: products, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  const categoriesIds = categories?.reduce((acc, category) => {
    return {
      ...acc,
      [category.id]: category.name
    }
  }, {} as { [key: string]: string })

  const productsWithCat = products?.map((product) => {
    if (categoriesIds) {
      const category = categoriesIds[product.categoryId]
      if (category) {
        return {
          ...product,
          categoryId: category
        }
      }
    }
    return product
  })

  return (
    <>
      <Table>
        <TableCaption>A list of products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">CategoryId</TableHead>
            <TableHead className="text-left">Image</TableHead>
            <TableHead className="text-left">Price</TableHead>
            <TableHead className="text-left">Quantity</TableHead>
            <TableHead className="text-left"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productsWithCat?.map((product) => (
            <TableRow key={product?.id}>
              <TableCell className="text-left">{product?.name}</TableCell>
              <TableCell className="text-left">{product?.categoryId}</TableCell>
              <TableCell className="text-left">
                <img
                  alt="Product Image"
                  className="object-cover w-24 h-20"
                  src={product?.image}
                  style={{ aspectRatio: "4/3", objectFit: "contain" }}
                />
              </TableCell>
              <TableCell className="text-left">{product?.price}</TableCell>
              <TableCell className="text-left">{product?.quantity}</TableCell>
              <TableCell className="flex justify-around">
                <EditProduct product={product} />
                <DeleteProduct product={product} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  )
}
