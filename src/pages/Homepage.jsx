import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import BlogPart from '../components/homepage/BlogPart.jsx';
import MoreProducts from '../components/homepage/MoreProducts.jsx';
import Products from '../components/homepage/Products.jsx';
import Reviews from '../components/homepage/Reviews.jsx';

export default function Homepage() {
    return (
        <div className='homepage'>
            <Header/>
                <Products/>
                <Reviews/>
                <MoreProducts/>
                <BlogPart/>
            <Footer/>
        </div>
    )
}