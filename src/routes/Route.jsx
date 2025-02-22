import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AuthLayout from "../layout/AuthLayout";
import EditDeleteTask from "../pages/EditDeleteTask/EditDeleteTask";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <PrivateRoute><Home/></PrivateRoute>
            },
            {
                path: '/edit-delete',
                element: <PrivateRoute><EditDeleteTask/></PrivateRoute>
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