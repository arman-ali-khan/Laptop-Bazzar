import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/ContextProvider';
import SingleMyProducts from './SingleMyProducts';

const MyProducts = () => {
    const {user} = useContext(AuthContext)

    const {data:products=[]} = useQuery({
        queryKey:['products'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = res.json();
            return data;
        }
    })
    return (
        <div className='bg-white rounded-xl m-2'>
            <h2 className='text-2xl p-3'>My Products</h2>
            <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                products.map(product=> <SingleMyProducts key={product._id} product={product} />)
            }
            </div>
        </div>
    );
};

export default MyProducts;