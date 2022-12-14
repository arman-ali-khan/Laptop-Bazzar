import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/ContextProvider';
import Ads from '../Ads/Ads';
import AppBanner from '../Banner/AppBanner';
import CustomarReview from '../Banner/CustomarReview';
import OfferBanner from '../Banner/OfferBanner';
import Slider from '../Banner/Slider';
import Products from '../Products/Products';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const {loading} = useContext(AuthContext)
    if(loading){
        return <Spinner/>
    }
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