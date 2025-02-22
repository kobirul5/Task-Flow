import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import GoogleLogin from "../../components/GoogleLogin"
import useAxiosPublic from "../../hooks/useAxios"
import Swal from "sweetalert2"

export default function SignUp() {
  const { createUser } = useContext(AuthContext)
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()


  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    const userData = {name, email, photoUrl}
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if(user?.email) {
          axiosPublic.post("/task-user" , userData)
          .then((res)=>{
            Swal.fire({
              icon: "success",
              title: "Sign Up Success",
            });
            navigate('/')
          })
          .catch((error)=> {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `Something went wrong! ${error?.massage}`,
            });
          })
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }


  return (
    <div className="hero py-20">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>

        </div>
        <div className="card  bg-base-100 w-full md:w-[500px]  shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body pb-4  w-full">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input type="text" name="name" className="input w-full" placeholder="Name" />
              <label className="fieldset-label">Photo Url</label>
              <input type="text" name="photoUrl" className="input w-full" placeholder="Photo Url" />
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input w-full" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input w-full" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn bg-green-900 text-whitel mt-4">Sign Up</button>
            </fieldset>
          </form>
          <div className="p-8 pt-0 w-full flex flex-col gap-2">
            <Link to={"/auth/login"}>You a Account? <span className="text-green-700">Login</span></Link>
            <GoogleLogin /></div>
      </div>
    </div>
    </div >
  )
}
