import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';
export default function GoogleLogin() {
  const { googleLogin } = useContext(AuthContext)

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Success",
        });
      }).catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${errorMessage}`,
        });
      });
  }

  return (
    <button onClick={handleGoogleLogin} className="btn">
      <FcGoogle /> Google
    </button>
  )
}
