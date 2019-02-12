import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return <button className = {props.style} onClick = {() => props.onClick(props.op)}>{props.op}</button>   
}


export default ActionButton;