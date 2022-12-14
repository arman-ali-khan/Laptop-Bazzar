import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import Error404 from "../../../assets/notFound.json";


const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
			<div>
			<Lottie animationData={Error404} loop={true} />
			</div>
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded-xl border-4 bg-warning ">Back to homepage</Link>
	</div>
</section>
    );
};

export default ErrorPage;