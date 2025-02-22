import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import GoogleLogin from "../../components/GoogleLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/")
        Swal.fire({
                  icon: "success",
                  title: "Login Success",
                });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${errorMessage}`,
        });
      });
  }

  return (
    <div className="hero py-20">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>

        </div>
        <div className="card  bg-base-100 w-full md:w-[500px]  shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body pb-4 w-full">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input w-full" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input w-full" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn bg-green-900 text-white mt-4">Login</button>
            </fieldset>
          </form>
          <div className="p-8 pt-0 w-full flex flex-col gap-2">
            <Link to={"/auth/signUp"}>You don't have any Account? <span className="text-green-700">Sing Up</span></Link>
            <GoogleLogin/></div>
        </div>
      </div>
    </div>
  )
}
