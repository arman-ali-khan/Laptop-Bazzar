import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Pages/Blog/Blog";
import Category from "../components/Pages/Category/Category";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Wishlist from "../components/Pages/Wishlist/Wishlist";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {path:'/', element:<Home/>},
        {path:'/wishlist', element:<Wishlist/>},
        {path:'/blog', element:<Blog/>},
        {path:'/login', element:<Login/>},
        // {path:'/register', element:<Register/>},
        {path:'/category/:id', element:<Category/>},
    ]}
])