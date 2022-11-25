import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';

const DashboardLayout = () => {
    return (
           <div>
             <Header/>
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
         <Outlet/>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 text-base-content">
            
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard'>Wishlist</Link></li>
            {/* //// */}
            <li><Link to='/dashboard/add-product'>Add a Product</Link></li>
            <li><Link to='/dashboard/my-products'>My Products</Link></li>
            <li><Link to='/dashboard'>My Buyers</Link></li>
            {/* //// */}
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
            <li><Link to='/dashboard'>All Buyers</Link></li>
            <li><Link to='/dashboard'>Reported Items</Link></li>
          </ul>
        
        </div>
      </div>
           </div>
    );
};

export default DashboardLayout;