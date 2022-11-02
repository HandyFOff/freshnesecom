import React from 'react';

export default function CategoryCard(props) {
    return (
        <div className='category__card'>
            <span className='category__card_pretitle'>{props.pretitle}</span>
            <h1 className='category__card_title'>{props.title}</h1>
            <div className='empty'></div>
            <a href={props.url}><button className='category__card_btn btn-rd'>Read recepies</button></a>
        </div>
    )
}