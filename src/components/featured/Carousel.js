import React from 'react';
import Slider from 'react-slick';
import { Hidden } from '@material-ui/core';

import bp_1 from '../../resources/images/bp_1.jpg';
import bp_2 from '../../resources/images/bp_2.jpg';
import bp_3 from '../../resources/images/bp_3.jpg';


const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }
    return (
        <div className='carrousel_wrapper'
            style={{
                
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}>
            <Slider {...settings}>
            <div>
            <div className='carrousel_image'
                    
                    style={{
                        background:`url(${bp_3})` ,
                        height:`${window.innerHeight}px`
                    }}>
                </div>
            </div>
            <div>
            <div className='carrousel_image'
                    style={{
                        background:`url(${bp_2})`,
                        height:`${window.innerHeight}px`
                    }}> 
                </div>
            </div>
            <div>
            <div className='carrousel_image'
                    style={{
                        background:`url(${bp_1})`,
                        height:`${window.innerHeight}px`
                    }}>
                </div>
            </div>
             
            </Slider>
        </div>
    );
};

export default Carousel;