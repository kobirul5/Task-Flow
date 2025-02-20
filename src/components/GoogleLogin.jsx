import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

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
        Google
    </button>
  )
}
