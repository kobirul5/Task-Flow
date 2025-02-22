import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import { Link } from "react-router-dom"
import AddTask from "../../components/AddTask"

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext)

  const links = <>
    <li><AddTask/></li>
    {
      user ? <button className='btn border border-white bg-transparent text-white font-bold hover:bg-green-950 hover:text-white hover:border-0' onClick={()=> logOut()}>Log Out</button> : <>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
      </>
    }
  </>
  return (
    <div className="navbar shadow-sm bg-green-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content gap-2 bg-green-800 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}

          </ul>
        </div>
        <a className="px-5 font-bold text-white  bg-transparent border-0  text-xl ">Task Flow</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {links}
        </ul>
      </div>

    </div>
  )
}
