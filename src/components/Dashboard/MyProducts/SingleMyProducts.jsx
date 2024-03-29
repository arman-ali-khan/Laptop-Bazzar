import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsBookmarksFill } from 'react-icons/bs';
import { HiShieldCheck } from 'react-icons/hi';
import { AuthContext } from '../../../Context/ContextProvider';
import Spinner from '../../Pages/Spinner/Spinner';
import DeleteModal from './DeleteModal';

const SingleMyProducts = ({product,setProduct}) => {

    const {name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,_id} = product;
    setProduct(product)
  const addAdsToProduct = {
    ads: 'true'
  }
  
  const removeAdsToProduct = {
    ads: 'false'
  }
   
    const handleAddToAds = adsProducts =>{
      const {name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,seller,ads,email,sold,_id:id} = adsProducts;
      const adsProduct ={
        name,category,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,seller,ads,sold,id,email
      }

    
      fetch(`https://laptop-bazzar-sparmankhan.vercel.app/advertise`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(adsProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data?.acknowledged){
          fetch(`https://laptop-bazzar-sparmankhan.vercel.app/advertise?id=${id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(addAdsToProduct)
          })
          .then(res=>res.json())
          .then(data =>{
            toast.success('Added to Ads')
            console.log(data);
           
          })
        }
        console.log(data);
      })
    }

    const handleRemoveAds = (adsProducts)  =>{
      const {_id:id} = adsProducts;
      fetch(`https://laptop-bazzar-sparmankhan.vercel.app/advertise?id=${id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(removeAdsToProduct)
      })
      .then(res=>res.json())
      .then(data =>{
        fetch(`https://laptop-bazzar-sparmankhan.vercel.app/advertise?id=${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
           toast.success('Remove From Ads')
           console.log(data);
        })
       
        console.log(data);
      })
    }


    const handleSoldProduct = soldProduct =>{
      const id = soldProduct?._id
      fetch(`https://laptop-bazzar-sparmankhan.vercel.app/products?id=${id}&sold=sold`,{
        method:'PUT'
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
      })
    }


    const handleUnSoldProduct = UnSoldProduct =>{
      const id = UnSoldProduct?._id
      fetch(`https://laptop-bazzar-sparmankhan.vercel.app/products?id=${id}&sold=unsold`,{
        method:'PUT'
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
      })
    }


    const handleDeleteProduct = id => {
      fetch(`https://laptop-bazzar-sparmankhan.vercel.app/products/${id}`,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
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

        {
          product?.ads ==="true" ?  <button onClick={()=>handleRemoveAds(product)} className='btn btn-sm btn-error'>Remove From Ads</button>
          :
                <button onClick={()=> handleAddToAds(product)} className='btn btn-warning btn-sm'>Mark as Ads</button>
        }
  



  

      <button onClick={()=>handleDeleteProduct(_id)} className='btn btn-error btn-sm'>Delete</button>
   {
     product?.sold === 'sold' &&  <button onClick={()=>handleUnSoldProduct(product)} className='btn-warning btn btn-sm'>Mark as avilable</button>
   } 
  {
     product?.sold === 'unsold' && <button  onClick={()=>handleSoldProduct(product)} className='btn-info btn btn-sm'>Mark as sold</button>
  }
    
      </div>
    );
};

export default SingleMyProducts;