import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    
    if(loading ){
        return <div className="flex justify-center mt-20">
            <span className="loading w-20 loading-infinity"></span>
        </div>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="auth/login"></Navigate>;
}
