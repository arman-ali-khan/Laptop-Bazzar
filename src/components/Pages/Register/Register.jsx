import React, {  useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../Context/ContextProvider';



const Register = () => {
	const {createUser,googleSignin,updateUser} = useContext(AuthContext)
	const navigate = useNavigate()
	const { register, handleSubmit,formState: { errors }  } = useForm();
	const [userType, setUserType]= useState('buyer')

	const handleRegister = data =>{
		const name = data.name;
		const email = data.email;
		const password= data.password;
		const role = userType;
		createUser(email,password)
		.then(result=>{
			const user = result.user;
			console.log(user);
			handleUserName(name)
			const userInfo = {
				name,
				email,
				role,
			}
			fetch('https://laptop-bazzar.vercel.app/users',{
				method:'POST',
				headers:{
					'content-type':'application/json'
				},
				body: JSON.stringify(userInfo)
			})
			.then(res=>res.json())
			.then(data=> {
				console.log(data);
				navigate('/')
			})
		})
		.catch(err=>{
			console.error(err);
		})
	}
	const handleUserName = (name)=>{
		const profile= {displayName: name};
		updateUser(profile)
		.then(()=>{
			console.log("name Added");

		})
		.catch(err=>{
			console.error(err);
		})
	}

	const handleGoogle = ()=>{
		googleSignin()
		.then(result=>{
			const user = result.user;
			console.log(user);
			navigate('/')
		})
		.catch(err=>{
			console.error(err);
		})
	}
    return (
        <div className='flex justify-center my-6'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form onSubmit={handleSubmit(handleRegister)} noValidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label htmlFor="name" className="block text-gray-600">Full Name</label>
			<input {...register("name", { required: "Name is Required!" })} type="text" name="name" id="name" placeholder="Name" className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
			{errors.name && <p role="alert" className='text-error'>{errors.name?.message}</p>}
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-600">Email</label>
			<input {...register("email", { required: "Email is Required!" })} type="email" name="email" id="email" placeholder="Email" className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
			{errors.email && <p role="alert" className='text-error'>{errors.email?.message}</p>}
		</div>
		<div className='flex items-center justify-between gap-1'>

		<div className=" text-sm">
		<label htmlFor="password" className="block text-gray-600">Password</label>
			<input {...register("password", {
          required: "required",
          minLength: {
            value: 6,
            message: "Password min length is 6"
          }})} type="password" name="password" id="password" placeholder="Password" className="w-full input input-bordered px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
			{errors.password && <p role="alert" className='text-error'>{errors.password?.message}</p>}
		</div>
		<div>
		<label htmlFor="password" className="block text-gray-600">User type</label>
			<select onChange={e=> setUserType(e.target.value)}  className='select w-full select-bordered' name="type" id="type">
				<option value="buyer">Buyer</option>
				<option value="seller">Seller</option>
			</select>
			
		</div>
		</div>
		<button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign up</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-600">Already have an account?
		<Link rel="noopener noreferrer" to="/login" className="underline text-gray-800">Sign in</Link>
	</p>
</div>
        </div>
    );
};

export default Register;