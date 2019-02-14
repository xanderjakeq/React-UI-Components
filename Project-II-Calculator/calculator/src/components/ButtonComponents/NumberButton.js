import React from 'react';
import './Button.css';


const NumberButton = (props) => {
    return (
        <button className = {props.style} onClick = {() => props.onClick(props.num)}>
            <span>{props.num}</span>
        </button>
    );
}

export default NumberButton;