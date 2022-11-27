import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextProvider';

const Buyers = ({buyers}) => {
  
    return (
        <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800">
	<div className="space-y-4 text-center divide-y divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">{buyers.name}</h2>
			<p className="px-5 text-xs sm:text-base text-gray-600">{buyers.email}</p>
           
		</div>
	</div>
</div>
    );
};

export default Buyers;