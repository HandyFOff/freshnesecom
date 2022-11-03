import React from 'react';
import Slick from './reviews/Slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
    return (
        <section className='reviews'>
            <div className='container'>
                <div className='reviews__header'>
                    <h1 className='reviews__header_title'>Our customers says</h1>
                    <button className='reviews__header_btn btn-reviews'>Go to Reviews</button>
                </div>
                <Slick/>
            </div>
        </section>
    )
}