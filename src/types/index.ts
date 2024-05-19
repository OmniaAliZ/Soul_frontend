export type Product = {
  id: string
  name: string
  categoryId: string
  image: string
  price: string
  quantity: string
  description: string
}
export type User = {
  id: string
  email: string
  password: string
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
