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
import { Product } from "@/types"
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
  const { data: products, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })
  return (
    <>
      <Table>
        <TableCaption>A list of products.</TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead className="w-[100px]"></TableHead> */}
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">CategoryId</TableHead>
            <TableHead className="text-left">Image</TableHead>
            <TableHead className="text-left">Price</TableHead>
            <TableHead className="text-left">Quantity</TableHead>
            <TableHead className="text-left">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow key={product.id}>
              {/* <TableCell className="font-medium"></TableCell> */}
              <TableCell className="text-left">{product.name}</TableCell>
              <TableCell className="text-left">{product.categoryId}</TableCell>
              <TableCell className="text-left">
                <img
                  alt="Product Image"
                  className="object-cover w-24 h-20"
                  //   height="3"
                  src={product.image}
                  style={{ aspectRatio: "4/3", objectFit: "contain" }}
                  //   width="4"
                />
              </TableCell>
              <TableCell className="text-left">{product.price}</TableCell>
              <TableCell className="text-left">{product.quantity}</TableCell>
              <TableCell className="text-left">
                <EditProduct product={product} />
              </TableCell>
              <TableCell className="text-left">
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
