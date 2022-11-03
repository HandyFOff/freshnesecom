import React from 'react';

export default function Review(props) {
    return (
        <div className='review'>
            <p className='review__text'>{props.review}</p>
            <h1 className='review__name'>{props.name}</h1>
            <img className='review__avatar' alt='avatar'></img>
        </div>
    )
}