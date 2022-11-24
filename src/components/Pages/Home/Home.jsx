import React from 'react';
import Ads from '../Ads/Ads';
import AppBanner from '../Banner/AppBanner';
import CustomarReview from '../Banner/CustomarReview';
import OfferBanner from '../Banner/OfferBanner';
import Slider from '../Banner/Slider';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Slider/>
           <Ads/>
           <Products/>
           <OfferBanner/>
           <AppBanner/>
           <CustomarReview/>
        </div>
    );
};

export default Home;