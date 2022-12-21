import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { HiShieldCheck } from "react-icons/hi";
import { AuthContext } from '../../../Context/ContextProvider';
import SingleAds from './SingleAds';
// import Modal from '../Modal/Modal';
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from '../Spinner/Spinner';

const Ads = () => {
    const [info,setInfo] = useState('')
    const {user} = useContext(AuthContext)
    const [loading,setLoading] = useState(true)
    const [location,setLoacation] = useState('')
    const [number,setNumber] = useState('')

 

  const { data: advertise = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      setLoading(true)
      const res = await fetch("https://laptop-bazzar-sparmankhan.vercel.app/advertise");
      const data = await res.json();
      setLoading(false)
      return data;
    },
  });

    const handleOrders = product =>{
        const name = product.name;
        const price = product.sellPrice;
        const image = product.image;
        const id = product._id;
        const sold = product.sold;
        const phone = number;
        const sellerEmail = product.email;
        const address = location;
        const buyer = user.displayName;
        const email = user.email;
        const order = {
          name,
          id,
          price,
          image,
          sold,
          phone,
          sellerEmail,
          address,
          buyer,
          email
        }
        console.log(name,phone,address,buyer,email);
        fetch('https://laptop-bazzar-sparmankhan.vercel.app/myOrders',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          toast.success('Order Successful')
        })
      }
    return (
     <>
      {
        loading ? <Spinner /> 
        :
        <div>
        {
          advertise.length> 0 &&  <div className='bg-blue-50 p-2 border-2 rounded-xl m-4'>
        <h3 className='ml-6 p-4 text-xl uppercase font-bold mt-4'>Advertise</h3>
        <div className='grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'>   
        {
            advertise.map(ads => <SingleAds loading={loading} setInfo={setInfo} key={ads._id} ads={ads} />)
        }
        </div>

        {/* Modal */}
        <input type="checkbox" id="open_ads" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg my-4">{info?.name}</h3>
         <div className="flex gap-2 w-full">
         <div>
            <label className="font-bold" htmlFor="">Name</label> <br />
            <input
              className="input w-full input-bordered"
              defaultValue={user?.displayName}
              type="text" disabled
            />
          </div>
          <div>
            <label  className="font-bold"  htmlFor="">Email</label> <br />
            <input disabled
              className="input w-full input-bordered"
              defaultValue={user?.email}
              type="text"
            />
          </div>
         </div>
        <div className="flex my-3">
        <div>
            <label className="font-bold" htmlFor="">Item Name</label> <br />
            <p className="px-4 border-4 cursor-not-allowed rounded-md py-2">{info?.name}</p>
          </div>
        <div>
            <label className="font-bold" htmlFor="">Item Price</label> <br />
            <p className="px-4 border-4 rounded-md cursor-not-allowed py-2">{info?.sellPrice}</p>
          </div>
        </div>
       
        <div className="grid grid-cols-2">
        <div >
            <label className="font-bold" htmlFor="">Write Your Location</label> <br />
            <input required onChange={e=>setLoacation(e.target.value)} type="text" className="input w-full input-bordered" name="location" id="" placeholder="Rangpur,Mithapukur" />
          </div>
          <div >
            <label className="font-bold" htmlFor="">Your Phone Number</label> <br />
            <input required onChange={e=>setNumber(e.target.value)}  type="number" className="input w-full input-bordered" name="number" id="" placeholder="01xxx-xxxxx" />
          </div>
         
        </div>
        
          <div className="modal-action">
            <label htmlFor="open_ads" className="btn btn-outline btn-info ">
             Cancel
            </label>
            <label type='submit' onClick={()=>handleOrders(info)} htmlFor="open_ads" className="btn btn-warning w-1/2">
              Buy This Laptop
            </label>
          </div>
        </div>
      </div>
    </div>
        }
      </div>
      }
     </>
       
    );
};

export default Ads;