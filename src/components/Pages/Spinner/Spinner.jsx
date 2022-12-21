import React from 'react';
import Lottie from "lottie-react";
import spinner from "../../../assets/spinner.json";
const Spinner = () => {
    return (
           <div className='relative'>
             <div className="flex w-full bg-white z-30 absolute top-0 overflow-hidden items-center h-screen justify-center">
             <div className="flex flex-col w-64 justify-center items-center">
             <Lottie animationData={spinner} loop={true} />
</div>
</div>
           </div>
    );
};

export default Spinner;