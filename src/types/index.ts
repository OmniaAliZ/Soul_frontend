export type Product = {
  id: string
  name: string
  categoryId: string
  image: string
  price: number
  quantity: number
  description: string
}
export type User = {
  id: string
  email: string
  fullName: string
  phone: string
  role: string //?
}
export type Category = {
  id: string
  name: string
  description: string
}
export type Address = {
  id: string
  userId: string
  country: string
  city: string
  street: string
  zip_code: number
}
export type Order = {
  id: string
  userId: string
  addressId: string
  status: string //?
  orderDate: Date //?
  totalPrice: number
}
// export type ProductWithCat = {
//   id: string
//   name: string
//   categoryId: string
//   image: string
//   price: string
//   quantity: string
//   descript
export type OrderItem = {
  quantity: number
  productId: string
}
export type OrderCheckout = {
  addressId: string
  items: OrderItem[]
}
export type DecodedUser = {
  aud: string
  emailaddress: string
  exp: number
  iss: string
  nameidentifier: string
  name: string
  role: keyof typeof ROLE
}
export const ROLE = {
  Customer: "Customer",
  Admin: "Admin"
} as const