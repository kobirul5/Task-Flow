import { useContext } from "react"
import { AuthContext } from "../../provider/AuthProvider"

export default function SignUp() {
  const { createUser } = useContext(AuthContext)
  const handleSignUp = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    createUser(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
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
        <div className="card  bg-base-100 w-full   shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body w-full">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input w-full" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input w-full" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}
