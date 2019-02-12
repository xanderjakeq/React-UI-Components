import React from 'react';
import './Button.css';


const ActionButton = (props) => {
    return <button onClick = {() => props.onClick(props.op)}>{props.op}</button>   
}


export default ActionButton;