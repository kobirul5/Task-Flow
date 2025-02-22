import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { FcGoogle } from "react-icons/fc";
export default function GoogleLogin() {
    const {googleLogin} = useContext(AuthContext)

    const handleGoogleLogin =()=>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            console.log(user) 
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

  return (
    <button onClick={handleGoogleLogin} className="btn">
        <FcGoogle /> Google
    </button>
  )
}
