import React from 'react';
import { Link } from 'react-router-dom';

const BannerCategory = () => {
    return (
        <div className="flex flex-col space-y-1">
        <Link rel="noopener noreferrer" className="px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">HP</Link>
        <Link rel="noopener noreferrer" className="px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Dell</Link>
        <Link rel="noopener noreferrer" className="px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Lenevo</Link>
        <Link rel="noopener noreferrer" className="px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Apple Mac</Link>
        <Link rel="noopener noreferrer" className="px-4 py-2 hover:bg-base-200 focus:bg-blue-300 text-base rounded-lg" to="/category/123">Walton</Link>
    </div>
    );
};

export default BannerCategory;