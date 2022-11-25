import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/ContextProvider';

const Wishlist = () => {
    const {user} = useContext(AuthContext)
    const {data:bookmarks=[]}= useQuery({
        queryKey:['bookmarks'],
        queryFn:async()=> {
            const res = await fetch(`http://localhost:5000/bookmarks?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl m-3'>Bookmarks</h3>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
     
     {
        bookmarks.map((book,i) =>  <tr key={i}>
            <th>{i+1}</th>
            <td><img className='w-12' src={book.image} alt="" /></td>
            <td>{book.name}</td>
            <td>{book.price}</td>
          </tr>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Wishlist;