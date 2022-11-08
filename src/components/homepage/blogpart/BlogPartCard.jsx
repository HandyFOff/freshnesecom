import React from 'react';

export default function BlogPartCard(props) {
    return (
        <a href={props.url}>
            <div className='blogpart__card'>
                <div>
                    <h1 className='blogpart__card_title'>{props.name}</h1>
                    <div>
                        <span>{props.author}</span>
                        <span>{props.date}</span>
                    </div>
                </div>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png'} alt="" className="blogpart__card_atimg"/>
            </div>
        </a>
    )
}