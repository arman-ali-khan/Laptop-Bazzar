import React from 'react';

const Blog = () => {
  
    return (
        <div data-aos="fade-up">
           <div className="  p-5 shadow-md bg-gray-50 text-gray-800">

	<div className="space-y-4 w-9/12 mx-auto text-center">
    <div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-black">What are the different ways to manage a state in a React application?</h3>
			</a>
			
		</div>
		<div className="space-y-2 p-3">
			<p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                <br />
                <br />



The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
<br />
1. Hooks  <br />
2. React Context API  <br />
3. Apollo Link State</p>
			
		</div>
		
	</div>
</div><div className="  p-5 shadow-md bg-gray-50 text-gray-800">

	<div className="space-y-4 w-9/12 mx-auto text-center">
    <div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-black">How does prototypical inheritance work?</h3>
			</a>
			
		</div>
		<div className="space-y-2 p-3">
			<p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
			
		</div>
		
	</div>
</div>

<div className="  p-5 shadow-md bg-gray-50 text-gray-800">

	<div className="space-y-4 w-9/12 mx-auto text-center">
    <div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-black">What is a unit test? Why should we write unit tests?</h3>
			</a>
			
		</div>
		<div className="space-y-2 p-3">
			<p>Unit testing is one of the many different types of automated testing. Unit tests exercise very small parts of the application in complete isolation, comparing their actual behavior with the expected behavior. The “complete isolation” part means that, when unit testing, you don’t typically connect your application with external dependencies such as databases, the filesystem, or HTTP services. That allows unit tests to be fast and more stable since they won’t fail due to problems with those external services.
 <br />
Unit tests, rather than being codeless tests, are created with code. You can think of unit tests as small programs that exercise your application, interacting with tiny portions of it. Each unit test is like a specification or example of how that tiny portion—i.e. a unit—behaves under a specific scenario.  By executing the suite of tests, developers can get immediate feedback when they change some codebase.

</p>
			
		</div>
		
	</div>
</div>


<div className="  p-5 shadow-md bg-gray-50 text-gray-800">

	<div className="space-y-4 w-9/12 mx-auto text-center">
    <div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold text-black">React vs. Angular vs. Vue?</h3>
			</a>
			
		</div>
		<div className="space-y-2 p-3">
			<p>

          <p className='font-bold'>What is React?</p>
Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.<br /><br />

One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.<br /><br />

With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.

<br />
<br />
<br />


<p className='font-bold'>  What is Angular?</p>
AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular. <br /> <br />

Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.

<br />
<br />
<br />


<p className='font-bold'> What is Vue?</p>
Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.<br /><br />

Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it’s simple to use and connect with other libraries or applications. This framework’s fast learning angle is almost a trademark. It’s a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.
<br />
<br />
<br />

            </p>
			
		</div>
		
	</div>
</div>
        </div>
    );
};

export default Blog;