import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import { HiShieldCheck } from "react-icons/hi";
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {name,category,seller,date,duration,image,location,oldPrice,sellPrice,used} = product;
    const [info, setInfo] = useState("");
    return (
        <div className=" p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
          <div className="relative">
            <img
              src={image}
              alt=""
              className="object-cover object-center w-full rounded-md h-40 dark:bg-gray-500"
            />
            <div title='Sell Price' className="absolute text-base top-2 left-2 btn btn-xs btn-warning">
              ${sellPrice}
            </div>
            <div title='Original Price' className="absolute top-9 left-2 btn btn-ghost hover:bg-white btn-xs text-black bg-white text-base line-through">
              ${oldPrice}
            </div>
            <div title='Product Used' className="absolute text-base top-2 right-2 btn btn-xs btn-warning">
              Used {used}{duration === 'year'&&'y'}
            </div>
            <div title='Brand' className="absolute text-base top-9 right-2 btn btn-xs btn-warning">
               {category}
            </div>
          </div>
          <div className="mt-6 mb-2">
            <div className="flex justify-between">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
               {date}
              </span>
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                {location}
              </span>
            </div>
            <p className="dark:text-gray-100 text-base font-bold">
              <span className="gap-2 rounded-xl flex items-center">
               {seller} <HiShieldCheck className="text-xl text-blue-400" />
              </span>
            </p>
            <h2 className="text-xl font-semibold tracking-wide">
              {name}
            </h2>
          </div>
          <label
            onClick={() => setInfo("From Ads")}
            htmlFor="open_modal"
            className="btn btn-warning w-full "
          >
            Buy Now
          </label>
          <Modal info={info} />
        
        </div>
    );
};

export default SingleProduct;