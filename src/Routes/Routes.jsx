import { createBrowserRouter } from "react-router-dom";
import AllSellers from "../components/Dashboard/AllSellers/AllSellers";
import Dashboard from "../components/Dashboard/Dashboard";
import MyProducts from "../components/Dashboard/MyProducts/MyProducts";
import Blog from "../components/Pages/Blog/Blog";
import Category from "../components/Pages/Category/Category";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import AddProduct from "../components/Pages/Seller/AddProduct";
import Wishlist from "../components/Pages/Wishlist/Wishlist";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {path:'/', element:<Main/>,errorElement:<ErrorPage/>,children:[
        {path:'/', element:<Home/>},
        {path:'/blog', element:<Blog/>},
        {path:'/login', element:<Login/>},
        {path:'/register', element:<Register/>},
        {path:'/dashboard', element:<Dashboard/>},
        {path:'/category/:id', element:<Category/>,loader:({params})=>{
            return fetch(`http://localhost:5000/products/${params.id}`)
        }},
    ]},
    {
        path:'/dashboard', element:<DashboardLayout/>,errorElement:<ErrorPage/>, children:[
            {path:'/dashboard',element:<Dashboard/>},
            {path:'/dashboard/add-product', element:<AddProduct/>},
            {path:'/dashboard/my-products', element:<MyProducts/>},
            {path:'/dashboard/sellers', element:<AllSellers/>},        
            {path:'/dashboard/wishlist', element:<Wishlist/>},

        ]
    }
])