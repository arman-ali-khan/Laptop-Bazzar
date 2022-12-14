import React, { useContext, useEffect, useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { BsBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const SingleWish = ({ product,refetch ,setInfo }) => {
  const { user,dbUser } = useContext(AuthContext);

  const {
    duration,
    seller,
    newdate,
    name,
    location,
    category,
    originalPrice,
    image,
    email,
    sellPrice,
    condition,
    dayMonthYear,
    _id
  } = product;
  const [dbUsers, setDbUsers] = useState({});
  useEffect(() => {
    fetch(`https://laptop-bazzar-sparmankhan.vercel.app/dbusers?email=${product?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setDbUsers(data)
        refetch()
      });
  }, [dbUsers]);
console.log(product);
 
  return (
    <div>
      {product?.sold === "unsold" && 
        <div
          className={` ${product?.sold==='sold' && 'hidden'} p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 `}
        >
          <div className="relative">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500"
            />
            <div
              title="Sell Price"
              className="absolute text-base top-2 left-0 rounded-r-full btn btn-xs btn-warning"
            >
              ৳{sellPrice}
            </div>
            <div
              title="Original Price"
              className="absolute top-9 left-0 rounded-r-full btn btn-ghost hover:bg-white btn-xs text-black bg-white text-base line-through"
            >
              ৳{originalPrice}
            </div>
            <div
              title="Condition"
              className="absolute bottom-0 left-0 rounded-r-full btn btn-xs  "
            >
              {condition}
            </div>
            <div
              title={`Product Used ${duration} ${dayMonthYear}`}
              className="absolute text-base top-2 right-0 rounded-l-full btn btn-xs btn-warning"
            >
              Used {duration}
              {dayMonthYear === "Year" && "y"}
              {dayMonthYear === "Month" && "m"}
              {dayMonthYear === "Day" && "d"}
            </div>
            <div
              title="Brand"
              className="absolute text-base top-9 right-0 btn rounded-l-full btn-xs btn-warning"
            >
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
            <p className="dark:text-gray-100 text-base font-bold">
              <span className="gap-2 rounded-xl flex items-center">
                {seller}
                {dbUsers.verify === "verified" && (
                  <HiShieldCheck className="text-xl text-blue-400" />
                )}
              </span>
            </p>
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          {
          dbUser?.role ==='seller' ? <label
          onClick={() => setInfo(product)}
          htmlFor="open_modal"
          className="btn btn-disabled w-full "
        >
         Buy Now
        </label>: <label
           onClick={() => setInfo(product)}
           htmlFor="open_modal"
           className="btn btn-warning w-full "
         >
           Buy Now
         </label>
        
         }

          
        </div>
      }
    </div>
  );
};

export default SingleWish;
