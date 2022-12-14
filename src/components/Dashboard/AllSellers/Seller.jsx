import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextProvider';

const Seller = ({seller,refetch}) => {
    const handleVerify =(email)=>{
        const verify = {"verify":"verified"}
        fetch(`https://laptop-bazzar-sparmankhan.vercel.app/sellers?email=${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(verify)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            toast.success('User verified!')
            refetch()
        })
    }

    const handleDeleteSeller = (email)=>{
        fetch(`https://laptop-bazzar-sparmankhan.vercel.app/sellers?email=${email}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            toast.success('User Deleted!')
            refetch()
        })
    }
    
    return (
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
	<div className="space-y-4 text-center divide-y divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{seller.name}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-600">{seller.email}</p>
		</div>
		{
            seller?.verify === 'verified' ? <p className='btn-sm btn btn-outline'>Seller Verified</p>
            :<button onClick={()=>handleVerify(seller?.email)} className='btn btn-warning btn-sm'>Verify Seller</button>
        }
        <button onClick={()=>handleDeleteSeller(seller?.email)} className='btn btn-error btn-sm'>Delete</button>
	</div>
</div>
    );
};

export default Seller;