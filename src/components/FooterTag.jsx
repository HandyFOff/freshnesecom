import React from 'react';

export default function FooterTag(props) {
    return (
        <a href={props.url} className='tag'>
            <span>{props.name}</span>
        </a>
    )
}