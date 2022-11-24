import React from 'react';
import { Link } from 'react-router-dom';
import hp from '../../../../src/assets/Brand/hp.png';
import dell from '../../../../src/assets/Brand/dell.png';
import lenevo from '../../../../src/assets/Brand/lenovo.png';
import apple from '../../../../src/assets/Brand/apple.png';
import asus from '../../../../src/assets/Brand/asus.png';
import walton from '../../../../src/assets/Brand/walton.png';

const BannerCategory = () => {
    return (
        <div>
            <div className='hidden lg:block'>
            <div className="flex flex-col space-y-1">
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">HP</Link>
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Dell</Link>
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Lenevo</Link>
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Apple Mac</Link>
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Asus</Link>
        <Link rel="noopener noreferrer" className="bg-white px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Walton</Link>
    </div>
            </div>
            <div className='lg:hidden flex w-full'>
                <div className="grid gap-2 grid-cols-3 sm:grid-cols-6 w-full">
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={hp} alt="" /></Link>
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={dell} alt="" /></Link>
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={lenevo} alt="" /></Link>
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={apple} alt="" /></Link>
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={asus} alt="" /></Link>
        <Link rel="noopener noreferrer" className="flex justify-center items-center bg-blue-200 px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123"><img className='sm:w-24 sm:h-auto w-20 h-auto' src={walton} alt="" /></Link>
    </div>
            </div>
        </div>
    );
};

export default BannerCategory;