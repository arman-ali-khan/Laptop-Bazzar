import React, { useState } from 'react';
import { HiShieldCheck } from "react-icons/hi";
import Modal from '../Modal/Modal';

const Ads = () => {
    const [info,setInfo] = useState('')

    return (
        <div>
        <h3 className='ml-6 p-4 text-xl uppercase font-bold mt-4'>Advertise</h3>
        <div className='grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
         <div className='relative'>
         <img src="https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="" className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500" />
         <div className='absolute text-base top-2 left-2 btn btn-xs btn-warning'>Free</div>
         <div className='absolute text-base top-2 right-2 btn btn-xs btn-warning'>Used 2y </div>
         <div className='absolute top-9 left-2 btn btn-xs btn-disabled text-black bg-white text-base line-through'>$500</div>
         </div>
<div className="mt-6 mb-2">
   <div className='flex justify-between'>
   <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">12, Nov, 2022</span>
    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Dhaka</span>
   </div>
<p className="dark:text-gray-100 text-base font-bold"><span className='gap-2 rounded-xl flex items-center'>Arman Khan <HiShieldCheck className='text-xl text-blue-400'/></span></p>
    <h2 className="text-xl font-semibold tracking-wide">Dell Laptop 4xl 21"</h2>
</div>
<label onClick={()=> setInfo('From Ads')} htmlFor="open_modal" className='btn btn-warning w-full '>Buy Now</label>
<Modal info={info}/>
        </div>
        </div>
    </div>
    );
};

export default Ads;