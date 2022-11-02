import React from 'react';

export default function ProductCard(props) {
    return (
        <div className='products__card'>
            <div className='products__card_img'>
                <div className=''></div>
                <span className='sale'>{props.sale}</span>
            </div>
            <div>
                <h1 className='products__card_title'>{props.title}</h1>
                <span className='products__card_desc'>{props.desc}</span>
            </div>
            <div className='products__card_purchase'>
                <div className='products__card_price price'>
                    <span className='price__new'>{props.price} USD</span>
                    <span className='price__old'>{props.price_old}</span>
                </div>
                <button className='products__card_btn btn-buy'>Buy now</button>
            </div>
        </div>
    )
}