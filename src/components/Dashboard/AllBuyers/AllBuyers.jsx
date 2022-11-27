import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Buyers from './Buyers';

const AllBuyers = () => {
    const {data:buyers=[],refetch}=useQuery({
        queryKey:['buyers'],
        queryFn:async()=>{
        const res = await fetch('http://localhost:5000/buyers')
        const data = res.json()
        return data;
        }
    })
    console.log(buyers);
    return (
        <div>
            <h3 className='text-2xl p-3 '>All Buyers</h3>
          <div className='grid gap-2 grid-cols-2 lg:grid-cols-3'>
          {
                buyers.map(buyers=><Buyers refetch={refetch} key={buyers._id} buyers={buyers} />)
            }
          </div>
        </div>
    );
};

export default AllBuyers;