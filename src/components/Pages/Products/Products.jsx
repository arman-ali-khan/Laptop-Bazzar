import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/ContextProvider";
import Spinner from "../Spinner/Spinner";
// import Modal from "../Modal/Modal";
import SingleProduct from "./SingleProduct";

const Products = () => {
 
  const {user} = useContext(AuthContext)
  const [location,setLoacation] = useState('')
  const [number,setNumber] = useState('')
  const [info, setInfo] = useState({});
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json(); 
      return data;
    }
  });
  

  const handleOrders = product =>{
    const name = product.name;
    const phone = number;
    const address = location;
    const buyer = user.displayName;
    const email = user.email;
    console.log(name,phone,address,buyer,email);
    toast.success('Order Successful')
  }

  return (
    <div className="bg-base-200 py-2">
      <h3 className="ml-6  p-4 text-xl uppercase font-bold mt-4">
        New Added Products
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {
            products.map(product => <SingleProduct setInfo={setInfo}  key={product._id} product={product} />)
        }
      </div>
      <div className="flex justify-center my-3">
            <Link className="btn btn-warning" to='/products'>See More</Link>
          </div>
          {/* <Modal info={info} /> */}
          <div>
      <input type="checkbox" id="open_modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg my-4">{info?.name}</h3>
         <div className="flex w-full">
         <div>
            <label className="font-bold" htmlFor="">Name</label> <br />
            <input
              className="input input-bordered"
              defaultValue={user?.displayName}
              type="text" disabled
            />
          </div>
          <div>
            <label  className="font-bold"  htmlFor="">Email</label> <br />
            <input disabled
              className="input input-bordered"
              defaultValue={user?.email}
              type="text"
            />
          </div>
         </div>
        <div className="flex my-3">
        <div>
            <label className="font-bold" htmlFor="">Item Name</label> <br />
            <p className="px-4 border-4 cursor-not-allowed rounded-md py-2">{info.name}</p>
          </div>
        <div>
            <label className="font-bold" htmlFor="">Item Price</label> <br />
            <p className="px-4 border-4 rounded-md cursor-not-allowed py-2">{info.sellPrice}</p>
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
            <label htmlFor="open_modal" className="btn btn-outline btn-info ">
             Cancel
            </label>
            <label type='submit' onClick={()=>handleOrders(info)} htmlFor="open_modal" className="btn btn-warning w-1/2">
              Buy This Laptop
            </label>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Products;
