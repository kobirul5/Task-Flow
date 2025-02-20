import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { createContext, use, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

   const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
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
    }

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>)
}

export default AuthProvider;