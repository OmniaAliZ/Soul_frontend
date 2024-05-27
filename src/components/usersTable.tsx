import api from "@/api"
import { User } from "@/types"
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
import { EditUser } from "./editUser"
import { DeleteUser } from "./deleteUser"

export function UsersTable() {
  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token")
      const res = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const { data, error } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers
  })
  return (
    <>
      <Table className="mt-20 w-4/5 mx-auto">
        <TableCaption>A list of Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-left">Full Name</TableHead>
            <TableHead className="text-left">Email</TableHead>
            <TableHead className="text-left">Phone</TableHead>
            <TableHead className="text-left">Role</TableHead>
            <TableHead className="text-left"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((user) => (
            <TableRow key={user?.id}>
              <TableCell className="text-left">{user?.fullName}</TableCell>
              <TableCell className="text-left">{user?.email}</TableCell>
              <TableCell className="text-left">{user?.phone}</TableCell>
              <TableCell className="text-left">{user?.role}</TableCell>
              <TableCell className="flex justify-around">
                <EditUser user={user} />
                <DeleteUser user={user} />
                {/* NOT YET : HOW TO BLOCK */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  )
}
