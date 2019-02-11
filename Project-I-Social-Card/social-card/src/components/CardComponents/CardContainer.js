import React from 'react';
import './Card.css';


import CardBanner from  './CardBanner';
import CardContent from  './CardContent';

const CardContainer = (props) => {
    return (
        <div className = "cardContainer">
            <CardBanner url = {props.url}/>
            <CardContent title = {props.title} paragraph = {props.paragraph} link = {props.link}/>
        </div>
    );
}

export default CardContainer;