import React from 'react';
import './Card.css';

const CardBanner = (props) => {
    return <div className = "img"><img src = {props.url}/></div>
}

export default CardBanner;