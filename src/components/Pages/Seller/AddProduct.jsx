import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextProvider';

const AddProduct = () => {
  const {user} = useContext(AuthContext)
  const {data:divisions=[]} = useQuery({
    queryKey:['division'],
    queryFn:async()=>{
      const res = await fetch('http://localhost:5000/division')
      const data = await res.json();
      return data;
    }
  })

  const [loading,setLoading] = useState(false)

  const { register, handleSubmit,formState: { errors },reset  } = useForm();

  const imgbbKey = import.meta.env.VITE_APP_imgbb_secret;


  const [division,setDivision] = useState('Barishal')
  const [brand,setBrand] = useState('hp')
  // D = day, M = Month, Y = Year
  const [dmy,setDmy] = useState('Day')

// Large date to simple date
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  
  const newdate = year + "/" + month + "/" + day;


  const handleAddProduct = data =>{
    setLoading(true)
    const name = data.name;
    const image = data.image[0];
    const location = division;
    const category = brand;
    const seller = user.displayName;
    const email = user.email;
    const originalPrice = data.originalPrice;
    const sellPrice = data.sellPrice;
    const duration = data.duration;
    const dayMonthYear = dmy;
    const formData = new FormData();
    formData.append('image',image)
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
    fetch(url,{
      method:'POST',
      body: formData
    })
    .then(res=> res.json())
    .then(imageData => {
      const image = imageData.data.url
      const product = {
        name,
        image,
        email,
        seller,
        location,
        category,
        originalPrice,
        sellPrice,
        duration,
        dayMonthYear,
        newdate,
        sold:'unsold'
      }
        fetch('http://localhost:5000/products',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          toast.success('Product Added!')
          setLoading(false)
          reset()
        })
    })

    
	}


    return (
        <div className='flex justify-center w-full'>
           <section className="">
  <div className="mx-auto py-2  ">
    <div className="">
    

      <div className="rounded-lg bg-white p-8 shadow-lg ">
        <h3 className='text-3xl p-4'>Add a Product</h3>
        <form onSubmit={handleSubmit(handleAddProduct)} action="" className="space-y-4">
          <div>
            <label className="" htmlFor="name">Product Name</label>
            <input  {...register('name',{required:'Product Name is Required!'})}
              className="w-full input input-bordered rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Product Name"
              type="text"
              id="name"
            />
            {errors.name && <p role="alert" className='text-error'>{errors.name?.message}</p>}
          </div>

        

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
            <div className=''>
            <h2>Select Your Location</h2>
            <select onChange={e=>setDivision(e.target.value)} className='select w-full select-bordered' name="location" id="location">
                {
                    divisions.map(divi => <option key={divi._id} value={divi.name}>{divi.name}</option>)
                }
                    
            </select>
          </div>
            </div>

            <div className='relative'>
            <h2>Original Price</h2>
              <input  {...register('originalPrice',{required:'Original Price is Required!'})} className="input w-full lg:w-5/6 input-bordered" id="option2" type="number" tabIndex="-1" /><span className='absolute text-3xl right-4 top-7'>৳</span>  
              {errors.originalPrice && <p role="alert" className='text-error'>{errors.originalPrice?.message}</p>}            
            </div>

            <div className='relative'>
            <h2>Sell Price</h2>
              <input  {...register('sellPrice',{required:'Sell Price is Required!'})} className="input w-full lg:w-5/6 input-bordered" id="option2" type="number" tabIndex="-1" /><span className='absolute text-3xl right-4 top-7'>৳</span>           
              {errors.sellPrice && <p role="alert" className='text-error'>{errors.sellPrice?.message}</p>}     
            </div> 
          </div> 
          
            <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            
            <div className=''>
            <h2>Product Used</h2>
              <input  {...register('duration',{required:'Used Duration is Required!'})} placeholder='3' className="input w-full input-bordered" id="option2" type="number" tabIndex="-1" /> 
              {errors.duration && <p role="alert" className='text-error'>{errors.duration?.message}</p>} 
            </div> 

            <div className=''>
            <h2>Select One</h2>
            <select onChange={e=>setDmy(e.target.value)} className='select w-full select-bordered' name="location" id="location">
               <option value="Day">Day</option> 
               <option value="Month">Month</option> 
               <option value="Year">Year</option> 
            </select>
            </div> 


            <div className=''>
            <h2>Select Brand</h2>
            <select onChange={e=> setBrand(e.target.value)} className='select w-full select-bordered' name="location" id="location">
               <option value="hp">HP</option> 
               <option value="dell">Dell</option> 
               <option value="lenevo">Lenevo</option> 
               <option value="apple">Apple</option> 
               <option value="asus">Asus</option> 
               <option value="walton">Walton</option> 
            </select>
            </div> 

           
          </div>
          
          <div className='border p-4'>
            <label className="sr-only" htmlFor="message">Message</label>
            <fieldset  className="w-full space-y-1 text-gray-800">
	<label htmlFor="files" className="block text-sm font-medium">Select Product Image</label>
	<div className="flex ">
		<input {...register('image',{required:'Product Image is Required!'})} type="file" name="image" id="image" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-300 w-full text-gray-600 bg-gray-100" />
	</div>
</fieldset>
{errors.image && <p role="alert" className='text-error'>{errors.image?.message}</p>}  
          </div>

          <div className="mt-4">
            <button disabled={loading}
              type="submit"
              className={`inline-flex w-full items-center justify-center rounded-lg ${loading ? 'btn-disabled':'btn-warning'} px-5 py-3  sm:w-auto`}
            >
              <span className="font-medium"> {loading ? <div>Adding...</div> : 'Add Product' } </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section> 
        </div>
    );
};

export default AddProduct;