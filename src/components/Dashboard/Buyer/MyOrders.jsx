import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/ContextProvider';

const MyOrders = () => {
const {user} = useContext(AuthContext)

  const {data:products=[]}=useQuery({
    queryKey:[''],
    queryFn:async()=>{
      const res = await fetch(`https://laptop-bazzar.vercel.app/myOrders?email=${user?.email}`,{
        headers:{
          authorization:`bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
      return data;
    }
  })
  
    return ( products.length >0 ?  <div>
      <div className="overflow-x-auto">
<table className="table w-full">

<thead>
<tr>
  <th></th>
  <th>Image</th>
  <th>Name</th>
  <th>Price</th>
  <th>Id</th>
  <th>Action</th>
</tr>
</thead>
<tbody>
{
products.map((product,i)=> <>
{product.sold  && 
<tr key={i}>
  <th>{i+1}</th>
  <td><img src={product.image} className='w-12 h-12' alt="" /></td>
  <td>{product.name}</td>
  <td>{product.price}</td>
  <td>{product.id}</td>
  <td>
    {
      product.sold==='unsold' ?  <Link to={`/dashboard/payment/${product._id}`} className='btn btn-sm btn-warning'>Pay Now</Link>
      :
       <Link to={`/dashboard/payment/${product._id}`} className='btn btn-sm btn-disabled'>Paid</Link>
    }
   
   
    </td>
</tr>
} 
</>)
}


</tbody>
</table>
</div>
  </div>:<p className='text-center flex justify-center items-center h-96 text-2xl font-bold bg-white p-12'>You have 0 Order</p>
    );
};

export default MyOrders;