import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  // GET request by axios
  const [products,setProducts] = useState([])
  axios .get('http://localhost:5000/myOrders')
  .then((res)=>setProducts(res.data))
    return (
        <div>
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
      products.map((product,i)=> <tr>
        <th>{i+1}</th>
        <td><img src={product.image} className='w-12 h-12' alt="" /></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.id}</td>
        <td><Link to={`/payment/${product._id}`} className='btn btn-sm btn-warning'>Pay Now</Link></td>
      </tr>)
     }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;