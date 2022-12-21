import React, { useContext, useEffect, useState } from "react";
import { HiShieldCheck } from "react-icons/hi";
import { BsBookmarksFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const SingleProduct = ({ product,loading, setInfo }) => {
  const { user, dbUser } = useContext(AuthContext);

  const {
    name,
    category,
    seller,
    newdate,
    duration,
    image,
    location,
    originalPrice,
    sellPrice,
    dayMonthYear,
    condition,
    _id,
  } = product;

  const [dbUsers, setDbUsers] = useState({});
  useEffect(() => {
    fetch(
      `https://laptop-bazzar-sparmankhan.vercel.app/dbusers?email=${product?.email}`
    )
      .then((res) => res.json())
      .then((data) => setDbUsers(data));
  }, [dbUsers]);

  const handleAddToBookmark = (product) => {
    const id = product._id;
    const name = product.name;
    const image = product.image;
    const sellerEmail = product.email;
    const email = user?.email;
    const seller = product.seller;
    const location = product.location;
    const category = product.category;
    const sellPrice = product.sellPrice;
    const originalPrice = product.originalPrice;
    const duration = product.duration;
    const dayMonthYear = product.dayMonthYear;
    const newdate = product.newdate;
    const sold = product.sold;
    const condition = product.condition;

    const bookmark = {
      id,
      name,
      image,
      sellerEmail,
      email,
      seller,
      location,
      category,
      sellPrice,
      originalPrice,
      duration,
      dayMonthYear,
      newdate,
      sold,
      condition,
    };

    fetch("https://laptop-bazzar-sparmankhan.vercel.app/wishlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookmark),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Added to Wishlist");
      });
  };
  return (
   <>
   {
    loading ? <div className="flex flex-col rounded shadow-md w-full  animate-pulse h-96">
    <div className="h-48 rounded-t bg-gray-300"></div>
    <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
      <div className="flex gap-3"><div className="w-full h-6 rounded bg-gray-300"></div><div className="w-full h-6 rounded bg-gray-300"></div></div>
      <div className="w-full h-8 rounded bg-gray-300"></div>
      <div className="w-full h-12 rounded bg-gray-300"></div>
    </div>
  </div> : <div >
    {product?.sold === "unsold" && (
      <div
        className={`${
          product?.sold === "sold" && "hidden"
        } p-6 h-96 rounded-md shadow-md hover:shadow-xl dark:bg-gray-900 dark:text-gray-50 `}
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
          {user && (
            <div
              onClick={() => handleAddToBookmark(product)}
              title="Add To Bookmark"
              className={`${dbUser?.role === "buyer" ? 'absolute text-base bottom-0 right-0 btn btn-xs btn-warning rounded-l-full btn-active':'hidden'} `}
            >
              <BsBookmarksFill className="text-black" />
            </div>
          )}
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
              {seller}
              {dbUsers.verify === "verified" && (
                <HiShieldCheck className="text-xl text-blue-400" />
              )}
            </span>
          </p>
          <h2 className="text-lg font-semibold  tracking-wide">
            {name.slice(0, 40)}
          </h2>
        </div>

        {
          user ? <><label
          onClick={() => setInfo(product)}
          htmlFor="open_modal"
          className={`${
            dbUser?.role === "buyer"?'btn btn-warning w-full ':'hidden' }`}
        >
          Buy Now
        </label>

        <button className={`${ dbUser?.role !== "buyer" ? "btn btn-warning w-full":"hidden"} `} disabled>
        Login as a buyer
        </button></>:  <Link className="btn btn-warning w-full" to='/login'>
         login before buy
        </Link>
        }
      </div>
    )}
  </div>
   }
   </>
  );
};

export default SingleProduct;
