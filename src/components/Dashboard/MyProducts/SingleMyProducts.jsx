import React from 'react';
import toast from 'react-hot-toast';
import { BsBookmarksFill } from 'react-icons/bs';
import { HiShieldCheck } from 'react-icons/hi';
import DeleteModal from './DeleteModal';

const SingleMyProducts = ({product}) => {
    
    const {name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,_id} = product;


   
    const handleAddToAds = adsProducts =>{
      const {name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,seller,_id:id} = adsProducts;
      const adsProduct ={
        name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,seller
      }
      console.log(id);
      fetch(`http://localhost:5000/advertise`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(adsProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        toast.success('Added to Ads')
        console.log(data)
      })
    }
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <div className="relative">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500"
          />
          <div title='Sell Price' className="absolute text-base top-2 left-0 rounded-r-full btn btn-xs btn-warning">
          ৳{sellPrice}
          </div>
          <div title='Original Price' className="absolute top-9 left-0 rounded-r-full btn btn-ghost hover:bg-white btn-xs text-black bg-white text-base line-through">
          ৳{originalPrice}
          </div>
          <div title={`Product Used ${duration} ${dayMonthYear}`} className="absolute text-base top-2 right-0 rounded-l-full btn btn-xs btn-warning">
            Used {duration}{dayMonthYear==='Year' && 'y'}
          </div>
          <div title='Brand' className="absolute text-base top-9 right-0 btn rounded-l-full btn-xs btn-warning">
             {category}
          </div>
        </div>
        <div className="mt-6 mb-2">
          <div className="flex justify-between">
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
             {newdate}
            </span>
            <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
              {location}
            </span>
          </div>
          <h2 className="text-lg font-semibold tracking-wide">
            {name}
          </h2>
        </div>
      <button onClick={()=> handleAddToAds(product)} className='btn btn-warning btn-sm'>Mark as Ads</button>
      <label htmlFor="delete-modal" className='btn btn-error btn-sm'>Delete</label>
      <DeleteModal/>
      </div>
    );
};

export default SingleMyProducts;