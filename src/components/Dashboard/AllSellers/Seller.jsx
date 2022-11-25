import React, { useState } from 'react';

const Seller = ({seller}) => {
    const handleVerify =(id)=>{
        console.log(id);
    }
    return (
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
	<div className="space-y-4 text-center divide-y divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{seller.name}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-600">{seller.email}</p>
		</div>
		{
            seller?.verified ? 'Seller Verified':<button onClick={()=>handleVerify(seller._id)} className='btn btn-warning btn-sm'>Verify Seller</button>
        }
	</div>
</div>
    );
};

export default Seller;