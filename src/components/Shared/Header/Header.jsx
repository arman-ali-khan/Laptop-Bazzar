import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsFillBookmarkHeartFill, BsSun } from 'react-icons/bs';
import logo from '../../../assets/logo.png'
import mobileLogo from '../../../assets/favicon.png'
import animateLogo from '../../../assets/logo.gif'
import { AuthContext } from '../../../Context/ContextProvider';
import LogoutModal from './LogoutModal';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../Pages/Spinner/Spinner';




const Header = () => {
  const {user,dbUser,loading} = useContext(AuthContext)
console.log(dbUser)
if(loading){
  return <Spinner/>
}
    return (
        <div className="navbar shadow-lg bg-base-100 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </div>
          <ul className='lg:hidden'>
          <Link to='/'><img className='h-12 ' src={mobileLogo}/></Link>
          </ul>
          <ul className="menu hidden lg:flex menu-horizontal p-0">
          <li><Link to='/'>Home</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
          </ul>
          
        </div>
        <div className="navbar-center lg:flex">
        <Link to='/' className=" normal-case text-xl">
            <img className='h-12 hidden lg:block' src={animateLogo}/>
          
            </Link>
        </div>
        <div className="navbar-end">
         
          {
            user?.email ? 
           <>
           {
             dbUser?.role == 'buyer' && <>
             <Link to='/wishlist' className="text-2xl rounded-full border p-2 m-2"><BsFillBookmarkHeartFill/></Link>
            <Link  to='/my-orders' className='btn btn-warning btn-sm mx-2'>My Orders</Link>
            </> 
           }
           {
            dbUser?.role == 'seller' &&  <Link  to='/add-product' className='btn btn-warning btn-sm mx-2'>Add a product</Link>
           }
           {
            dbUser?.role == 'admin' &&  <>
            <Link  to='/all-sellers' className='btn btn-warning btn-sm mx-2'>All Sellers</Link>
            <Link  to='/all-buyers' className='btn btn-warning btn-sm mx-2'>All Buyers</Link>
            <Link  to='/reported' className='btn btn-warning btn-sm mx-2'>Reported</Link>
            </>
           }
            <label  htmlFor="logout-modal" className='btn btn-error btn-sm mx-2'>Logout</label>
           </>
            : <Link to='/login' className="btn btn-sm m-2 btn-warning">Login</Link>
          }
         <LogoutModal/>
          <button className="text-2xl"><BsSun/></button>
        </div>
      </div>
    );
};

export default Header;