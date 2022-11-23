import React from "react";
import { Link } from "react-router-dom";
import slider1 from '../../../assets/slider-1.png'
import slider2 from '../../../assets/slider-2.png'
import BannerCategory from "./BannerCategory";
import Category from "./BannerCategory";

const Banner = () => {
  return (
    <div className="lg:flex justify-around">
      <div className="carousel lg:w-3/4">
        <div id="slide2" className="carousel-item lg:h-[500px] relative w-full">
          <img src={slider1} className="w-full lg:h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item lg:h-[500px] relative w-full">
          <img src={slider2} className="w-full lg:h-[500px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-warning btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-warning btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
      <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-400">Select Brand</h2>
			<BannerCategory/>
		</div>
	</nav>
</aside>
      </div>
    </div>
  );
};

export default Banner;
