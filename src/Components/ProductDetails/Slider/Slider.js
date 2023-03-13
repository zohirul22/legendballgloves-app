import React from 'react';
import './Slider.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
  return (
    <div>
      <Carousel>
        <div>

          <img className='img' src="https://i.ibb.co/Xp0fkfz/download.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Xp0fkfz/download.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Xp0fkfz/download.png" alt="" />
        </div>
        <div>
          <img src="https://i.ibb.co/Xp0fkfz/download.png" alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;