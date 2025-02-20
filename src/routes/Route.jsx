import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <PrivateRoute><Home/></PrivateRoute>
            },
            
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children:[
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signUp",
                element: <SignUp/>
            }
        ]
    }
])

export default router;