import { ReactElement } from "react"
import { ROLE } from "@/types"
import jwtDecode from "jwt-decode"
import { Navigate } from "react-router-dom"
import { reshapeUser } from "@/lib/utils"

export function PrivateRoute({ children }: { children: ReactElement }) {
  const token = localStorage.getItem("token") || ""
  if (!token) return <Navigate to="/" />

  const decodedToken = jwtDecode(token)
  const decodedUser = reshapeUser(decodedToken)

  return decodedUser.role === ROLE.Customer ? <Navigate to="/" /> : children
}
