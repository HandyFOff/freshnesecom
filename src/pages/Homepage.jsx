import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Products from '../components/homepage/Products.jsx';

export default function Homepage() {
    return (
        <div className='homepage'>
            <Header/>
                <Products/>
            <Footer/>
        </div>
    )
}