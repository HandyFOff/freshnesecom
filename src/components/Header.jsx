import React from 'react';

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__top'>
                    <div className='header__contacts'>
                        <span>Chat with us</span>
                        <a href='tel:+420 336 775 664'>+420 336 775 664</a>
                        <a href='mailto:info@freshnesecom.com'>info@freshnesecom.com</a>
                    </div>
                    <nav className='header__nav nav'>
                        <a href="/blog" className='nav__item'>Blog</a>
                        <a className='nav__item'>About Us</a>
                        <a className='nav__item'>Careers</a>
                    </nav>
                </div>
            </div>
            <hr></hr>
            <div className='container'>
                <div className='header__main'>
                    <div className='header__logo'>
                        <a href="/"><img className='img' alt='logo freshnesecom' src={require('../assets/logo.png')}/></a>
                    </div>
                    <div className='header__search search'>
                        <div className='search__list'>All categories</div>
                        <div class="sep"></div>
                        <input type="text" placeholder="Search Products, categories..."/>
                        <img alt='search icon' src={require('../assets/header/ic-actions-search.png')}/>
                    </div>
                    <div className='header__info'>
                        <div className='info__account'><img alt='freshnesecom account' src={require('../assets/header/ic-actions-user.png')}/></div>
                        <div className='info__basket'><img alt='freshnesecom account' src={require('../assets/header/ic-basket.png')}/></div>
                    </div>
                </div>
                <div className='header__search mobile search'>
                        <div className='search__list'>All categories</div>
                        <div class="sep"></div>
                        <input type="text" placeholder="Search Products, categories..."/>
                        <div className='empty'></div>
                        <img alt='search icon' src={require('../assets/header/ic-actions-search.png')}/>
                </div>
            </div>
            <div className='container'>
                <menu className='header__menu menu'>
                    <a href='#' className='menu__item'>Bakery</a>
                    <a href='#' className='menu__item'>Fruit and vegetables</a>
                    <a href='#' className='menu__item'>Meat and fish</a>
                    <a href='#' className='menu__item'>Drinks</a>
                    <a href='#' className='menu__item'>Kitchen</a>
                    <a href='#' className='menu__item'>Special nutrition</a>
                    <a href='#' className='menu__item'>Baby</a>
                    <a href='#' className='menu__item'>Pharmacy</a>
                </menu>
            </div>
        </header>
    )
}