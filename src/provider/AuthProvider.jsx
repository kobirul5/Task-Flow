import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, use, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

   const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const googleLogin = ()=>{
      return signInWithPopup(auth, googleProvider)
   }
  

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setLoading(false);
        setUser(currentUser)
    })
    

    return ()=>{
        unsubscribe()
    }

   },[])

    const authInfo = {
       loading,
       user,
       setUser,
       createUser,
       loginUser,
       googleLogin,
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;