import React from 'react';
import productsData from '../../data/ProductsData';
import PCard from './products/ProductCard';

export default function MoreProducts() {

    const bestProducts = productsData[2].others.map(
        (data) => <PCard
                    key={data.id}
                    img={data.img}
                    title={data.title}
                    desc={data.desc}
                    price={data.price}
                    price_old={data.price_old}
                    sale={data.sale}
                  />
    )

    return (
        <div className='container'>
            <section className='more products__farm'>
                <div className='more__header'>
                    <h1 className='products__menu_title'>Section Headline</h1>
                    <button className='products__menu_btn btn-gray'><span>Go to Headline</span></button>
                </div>
                <div className='products__content'>
                    {bestProducts}
                </div>
            </section>
        </div>
    )
}