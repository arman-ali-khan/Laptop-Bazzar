import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Seller from './Seller';

const AllSellers = () => {
    const {data:sellers=[],refetch}=useQuery({
        queryKey:['sellers'],
        queryFn:async()=>{
        const res = await fetch('https://laptop-bazzar-sparmankhan.vercel.app/sellers?role=seller')
        const data = res.json()
        return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl p-3 '>All Sellers</h3>
          <div className='grid gap-2 grid-cols-2 lg:grid-cols-3'>
          {
                sellers.map(seller=><Seller refetch={refetch} key={seller._id} seller={seller} />)
            }
          </div>
        </div>
    );
};

export default AllSellers;