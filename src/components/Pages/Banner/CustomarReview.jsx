import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import {AiFillStar} from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './Swiper.css'


const CustomarReview = () => {

  
    return (
        <div data-aos="fade-up" className='w-full'>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 80,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='w-96'>
        <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
             
				<p className="relative py-1 text-base italic text-center dark:text-gray-100">
                I strongly recommend Laptop Bazzar. Very easy to purchase & sell anything. Their every product is high in quality. Their delivery system is super-fast. I can see it's effect & significance in our everyday life. Best wishes for Laptop Bazzar. ❤️❤️

 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                Had a great experience with them and pretty good behavior, they came to me at late night to take my product as they promised me to take my device within one day. Specially thanks to rifat bhaiya one of Laptop Bazar crew who helped me a lot . 
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
        <SwiperSlide>
      <div className="flex w-full flex-col my-6 shadow-lg">
			<div className="rounded-t-lg px-2 dark:bg-gray-900">
                   <div className='flex text-warning'>
                    <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>   <AiFillStar/>
                   </div>
				<p className="relative px-6 py-1 text-base italic text-center dark:text-gray-100">
                I did not expect to get such a service in a pandemic situation. Very good initiative. If the situation gets better, more services will come. Thanks to you!
 
				</p>
			</div>
			<div className="flex flex-col items-center justify-center rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
				<img src="https://i.pinimg.com/474x/4b/71/f8/4b71f8137985eaa992d17a315997791e.jpg" alt="" className="w-16 h-16 bg-center rounded-full dark:bg-gray-500 dark:bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">Distinctio</p>
				<p className="text-sm uppercase">Aliquamum</p>
			</div>
		</div>
        </SwiperSlide>
      </Swiper>

        </div>
    );
};

export default CustomarReview;