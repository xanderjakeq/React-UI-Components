import React from 'react';
import './Card.css';

const CardContent = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default CardContent;
