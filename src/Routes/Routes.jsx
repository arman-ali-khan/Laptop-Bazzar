import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Pages/Category/Category";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import Wishlist from "../components/Pages/Wishlist/Wishlist";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {path:'/', element:<Home/>},
        {path:'/wishlist', element:<Wishlist/>},
        {path:'/', element:<Home/>},
        {path:'/category/:id', element:<Category/>},
    ]}
])