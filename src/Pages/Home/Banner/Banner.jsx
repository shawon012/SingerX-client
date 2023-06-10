import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img6 from '../../../../public/l4.png';
import img1 from '../../../../public/b2.png';
import img2 from '../../../../public/b3.png';
import img3 from '../../../../public/l2.png';
import img4 from '../../../../public/l3.png';
import img5 from '../../../../public/l1.png';


const Banner = () => {
    return (
        <div >
             <Carousel>
            <div>
                <img className='max-h-screen' src={img1} />
            </div>
            <div>
                <img className='max-h-screen' src={img2} />
            </div>
            <div>
                <img className='max-h-screen' src={img3} />
            </div>
            <div>
                <img className='max-h-screen' src={img4} />
            </div>
            <div>
                <img className='max-h-screen' src={img5} />
            </div>
            <div>
                <img className='max-h-screen' src={img6} />
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;