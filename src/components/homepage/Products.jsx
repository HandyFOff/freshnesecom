import React from 'react';
import CCard from './products/CategoryCard';
import PCard from './products/ProductCard';
import productsData from '../../data/ProductsData';

export default function Products() {

    const bestProducts = productsData[0].best.map(
        (data) => <PCard
                    key={data.id}
                    img={data.img}
                    title={data.title}
                    desc={data.desc}
                    price={data.price}
                    price_old={data.price_old}
                    sale={data.sale}
                  />
    );

    const farmProducts = productsData[1].farm.map(
        (data) => <PCard
                    key={data.id}
                    img={data.img}
                    title={data.title}
                    desc={data.desc}
                    price={data.price}
                    price_old={data.price_old}
                    sale={data.sale}
                  />
    );

    return (
        <div className='container'>
            <section className='products'>
                <div className='products__category category'>
                    <div className='products__menu'>
                        <h1 className='products__menu_title'>Category menu</h1>
                        <menu>
                            <a className='products__menu_item'>Bakery</a>
                            <a className='products__menu_item'>Fruit and vegetables</a>
                            <a className='products__menu_item'>Meat and fish</a>
                            <a className='products__menu_item'>Drinks</a>
                            <a className='products__menu_item'>Kitchen</a>
                        </menu>
                        <button className='products__menu_btn btn-gray'><span>More categories</span></button>
                    </div>
                    <CCard pretitle="Banner subfocus" title="Space for heading" url="/blog"/>
                    <CCard pretitle="Banner subfocus" title="Space for heading" url="/blog"/>
                </div>
                <div className='products__best'>
                    <div className='products__menu'>
                        <h1 className='products__menu_title'>Category menu</h1>
                        <menu>
                            <a className='products__menu_item'>Bakery</a>
                            <a className='products__menu_item'>Fruit and vegetables</a>
                            <a className='products__menu_item'>Meat and fish</a>
                            <a className='products__menu_item'>Drinks</a>
                            <a className='products__menu_item'>Kitchen</a>
                        </menu>
                        <button className='products__menu_btn btn-gray'><span>More products</span></button>
                    </div>
                    <div className='products__content'>
                        {bestProducts}
                    </div>
                </div>
                <div className='products__farm'>
                    <div className='products__menu'>
                        <h1 className='products__menu_title'>Category menu</h1>
                        <menu>
                            <a className='products__menu_item'>Bakery</a>
                            <a className='products__menu_item'>Fruit and vegetables</a>
                            <a className='products__menu_item'>Meat and fish</a>
                            <a className='products__menu_item'>Drinks</a>
                            <a className='products__menu_item'>Kitchen</a>
                        </menu>
                        <button className='products__menu_btn btn-gray'><span>More products</span></button>
                    </div>
                    <div className='products__content'>
                        {farmProducts}
                    </div>
                </div>
            </section>
        </div>
    )
}