import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
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