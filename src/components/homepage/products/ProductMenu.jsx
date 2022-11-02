import React from 'react';

export default function ProductMenu() {
    return (
        <div className='products__menu'>
            <h1 className='products__menu_title'>Category menu</h1>
            <menu>
                <a className='products__menu_item'>Bakery</a>
                <a className='products__menu_item'>Fruit and vegetables</a>
                <a className='products__menu_item'>Meat and fish</a>
                <a className='products__menu_item'>Drinks</a>
                <a className='products__menu_item'>Kitchen</a>
            </menu>
            <button className='products__menu_btn btn-gray'></button>
        </div>
    )
}