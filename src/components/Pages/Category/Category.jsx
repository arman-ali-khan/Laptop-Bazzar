import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { useLoaderData } from 'react-router-dom';
// import Modal from '../Modal/Modal';
import CategoryProduct from './CategoryProduct';

const Category = () => {
    const [category,setCategory ] = useState('')
    const products = useLoaderData()
    return (
        <div>
        <h3 className='ml-6 p-4 text-xl uppercase font-bold mt-4'>Products of {category}</h3>
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>
       
       {
        products.map(product=> <CategoryProduct setCategory={setCategory} key={product._id} product={product} />)
       }
        </div>
    </div>
    );
};

export default Category;