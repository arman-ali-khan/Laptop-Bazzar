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

useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const [products,setProducts] = useState([])
    const [product,setProduct] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/myproducts?email=${user?.email}`,{
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>  res.json()
        )
        .then(data =>{
            console.log(data);
            setProducts(data)
        })
    },[products,product])
    return ( <div className='bg-white rounded-xl m-2'>
            <h2 className='text-2xl p-3'>My Products</h2>
            <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
            {
                products?.map(product=> <SingleMyProducts setProduct={setProduct} key={product._id} product={product} />)
                
            }
            </div>
        </div>
    );
};

export default MyProducts;