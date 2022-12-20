import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import Notfound from "./views/Notfound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/dashboard";

const router=createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path: '/',
                element: <Navigate to="/users"/>
            },
            {
                path:'/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/users',
                element:<Users/>
            },


        ]
    },
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
        ]
    },


    {
        path:'*',
        element:<Notfound/>
    },
])

export default router;
