import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';
import { AuthContext } from '../Context/ContextProvider';
import { FaBars } from 'react-icons/fa';

const DashboardLayout = () => {
  const {dbUser} = useContext(AuthContext)
  return (

           <div>
             <Header/>
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className='flex drawer-side  justify-start'>
          <label htmlFor="my-drawer-2" className="btn menu btn-primary drawer-button lg:hidden"><FaBars/></label>
          </div>
         <Outlet/>
        
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80  text-base-content">
            {
              dbUser?.role === 'buyer' && <> <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
              <li><Link to='/dashboard/wishlist'>Wishlist</Link></li></>
            }
           
            {
              dbUser?.role === 'seller' && <> 
              <li><Link to='/dashboard/my-products'>My Products</Link></li>
              <li><Link to='/dashboard/add-product'>Add a Product</Link></li>
              <li><Link to='/dashboard'>My Buyers</Link></li>
              </>
            }
           {
            dbUser?.role === 'admin' && <><li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/dashboard/sellers'>All Sellers</Link></li>
            <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
            <li><Link to='/dashboard'>Reported Items</Link></li>
            </>
           }
            
          </ul>
        
        </div>
        
      </div>
           </div>
    );
};

export default DashboardLayout;