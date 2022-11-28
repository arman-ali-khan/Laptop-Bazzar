import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/ContextProvider';
import useToken from '../../../hooks/useToken';
import Spinner from '../../Pages/Spinner/Spinner';
import SingleMyProducts from './SingleMyProducts';

const MyProducts = () => {
    const {user,loading,logoutUser} = useContext(AuthContext)
 const navigate = useNavigate()


    if(loading){
        return <Spinner/>
    }


    const [products,setProducts] = useState([])
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myproducts?email=${user?.email}`,{
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>  res.json())
        .then(data =>{
            setProducts(data)

        })
    },[products,product])
    return ( products?.length> 0 ? <div className='bg-white rounded-xl m-2'>
    <h2 className='text-2xl p-3'>My Products</h2>
    <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
    {
        products?.map(product=> <SingleMyProducts setProduct={setProduct} key={product._id} product={product} />)
        
    }
    </div>
</div>:<p className='text-center flex justify-center items-center h-96 text-2xl font-bold bg-white p-12'>You have 0 Product</p>
    );
};

export default MyProducts;