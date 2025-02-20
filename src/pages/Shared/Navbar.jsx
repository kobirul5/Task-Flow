import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"

export default function Navbar() {
  const {name} = useContext(AuthContext)
  return (
    <div>
      navbar {name}
      
      </div>
  )
}
