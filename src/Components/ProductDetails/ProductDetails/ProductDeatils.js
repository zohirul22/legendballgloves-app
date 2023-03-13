import React from 'react';
import Blog from '../Blog/Blog';
import Slider from '../Slider/Slider';

import './ProductDetails.css';


const ProductDeatils = () => {
    return (
        <div className='ProductDeatils'>
            <div className="">
              
                <Slider></Slider>
            </div>
            <div className="">
                <Blog></Blog>
            </div>
        </div>
    );
};

export default ProductDeatils;