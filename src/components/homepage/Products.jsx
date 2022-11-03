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
                    <h1 className='products__menu_title-mobile products__menu_title'>Category menu</h1>
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
                    <div className='category__cards_mobile'>
                        <CCard pretitle="Banner subfocus" title="Space for heading" url="/blog"/>
                        <CCard pretitle="Banner subfocus" title="Space for heading" url="/blog"/>
                    </div>
                    <button className='products__menu_btn-mobile products__menu_btn btn-gray'><span>More categories</span></button>
                </div>
                <div className='products__best'>
                    <h1 className='products__menu_title-mobile products__menu_title'>Category menu</h1>
                        <div className='products__menu'>
                            <h1 className='products__menu_title'>Category menu</h1>
                            <menu>
                                <a className='products__menu_item'>Kitchen</a>
                                <a className='products__menu_item'>Meat and fish</a>
                                <a className='products__menu_item'>Special nutrition</a>
                                <a className='products__menu_item'>Pharmacy</a>
                                <a className='products__menu_item'>Baby</a>
                            </menu>
                            <button className='products__menu_btn btn-gray'><span>More products</span></button>
                        </div>
                        <div className='products__content'>
                            {bestProducts}
                        </div>
                    <button className='products__menu_btn-mobile products__menu_btn btn-gray'><span>More categories</span></button>
                </div>
                <div className='products__farm'>
                    <h1 className='products__menu_title-mobile products__menu_title'>Category menu</h1>
                        <div className='products__menu'>
                            <h1 className='products__menu_title'>Category menu</h1>
                            <menu>
                                <a className='products__menu_item'>Carrots</a>
                                <a className='products__menu_item'>Tomatoes</a>
                                <a className='products__menu_item'>Potatoes</a>
                                <a className='products__menu_item'>Chicken</a>
                                <a className='products__menu_item'>Pork</a>
                            </menu>
                            <button className='products__menu_btn btn-gray'><span>More products</span></button>
                        </div>
                        <div className='products__content'>
                            {farmProducts}
                        </div>
                    <button className='products__menu_btn-mobile products__menu_btn btn-gray'><span>More categories</span></button>
                </div>
            </section>
        </div>
    )
}