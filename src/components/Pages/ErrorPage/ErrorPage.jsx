import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded border-2 ">Back to homepage</Link>
	</div>
</section>
    );
};

export default ErrorPage;