import React from 'react';
import Slider from 'react-slick';
import reviewsData from '../../../data/ReviewsData';
import './Slick.scss';
import Review from './Review';

/*

    npm imports:
    1. npm i react-slick
    2. npm i slick-carousel --save

    Put in your MAIN.js file:
    
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

*/

export default function Slick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "250px",
        responsive: [
          {
            breakpoint: 1070,
            settings: {
              centerPadding: "150px",
            },
          },
          {
            breakpoint: 872,
            settings: {
              centerPadding: "50px",
            },
          },
          {
            breakpoint: 638,
            settings: {
              slidesToShow: 1,
              centerPadding: "50px",
            },
          },
        ],
    };

    const reviews = reviewsData.map(
      (data) => <Review
                  key={data.id}
                  review={data.review}
                  name={data.name}
                  img={data.avatar}
                />
    );

    return (
      <div className='slider'>
          <Slider {...settings}>
              {reviews}
          </Slider>
      </div>
    );
}