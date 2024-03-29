import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { BsBookmarksFill } from 'react-icons/bs';
import { HiShieldCheck } from 'react-icons/hi';
import { AuthContext } from '../../../Context/ContextProvider';
// import Modal from '../Modal/Modal';

const CategoryProduct = ({product,setCategory,setInfo}) => {

  const {dbUser,user} = useContext(AuthContext)
    const {name,category,seller,newdate,duration,image,location,originalPrice,sellPrice,dayMonthYear,_id} = product;


    setCategory(category)
    const handleAddToBookmark = (product)=>{
       
        const id = product._id;
        const name = product.name;
        const image = product.image;
        const sellerEmail = product.email;
        const email = user?.email;
        const seller = product.seller;
        const location =  product.location
        const category = product.category;
        const sellPrice = product.sellPrice;
        const originalPrice = product.originalPrice;
        const duration = product.duration;
        const dayMonthYear = product.dayMonthYear;
        const newdate = product.newdate;
        const sold = product.sold;
        const condition = product.condition;


        const bookmark = {id,name,image,sellerEmail,email,seller,location,category,sellPrice,originalPrice,duration,dayMonthYear,newdate,sold,condition}
  
        fetch('https://laptop-bazzar-sparmankhan.vercel.app/wishlist',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(bookmark)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data);
          toast.success('Added to Wishlist')
        })
      }
    return (
       <div data-aos="fade-up">
        {
          product.sold==='unsold' &&  <div className="h-96 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
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
            <div onClick={()=>handleAddToBookmark(product)} title='Add To Bookmark' className="absolute text-base bottom-0 right-0 btn btn-xs btn-warning rounded-l-full btn-active">
               <BsBookmarksFill className='text-black'/>
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
            <p className="dark:text-gray-100 text-base font-bold">
              <span className="gap-2 rounded-xl flex text-blue-500 items-center">
               {seller} <HiShieldCheck className="text-xl text-blue-400" />
              </span>
            </p>
            <h2 className="text-lg leading-5 sm:leading-7 font-semibold tracking-wide">
              {name.slice(0,40)}
            </h2>
          </div>
          {
          user ? <><label
          onClick={() => setInfo(product)}
          htmlFor="open_category"
          className={`${
            dbUser?.role === "buyer"?'btn btn-warning w-full ':'hidden' }`}
        >
          Buy Now
        </label>

        <button className={`${ dbUser?.role !== "buyer" ? "btn btn-warning w-full":"hidden"} `} disabled>
        Login as a buyer
        </button></>:  <Link className={`${ dbUser?.role !== "buyer" ? "btn btn-warning w-full":"hidden"} `} to='/login'>
         login before buy
        </Link>
        }
         
          {/* <Modal info={info} /> */}
        
        </div>
        }
       </div>
    );
};

export default CategoryProduct;