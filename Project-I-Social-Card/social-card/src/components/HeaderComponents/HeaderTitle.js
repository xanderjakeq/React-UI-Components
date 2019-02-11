import React from 'react';
import './Header.css';


const HeaderTitle = (props) => {
    return(
        <div>
            <h1>{props.displayName}</h1>
            <h2>@{props.userName} - {props.day} {props.month}</h2>
            
        </div>
    )
}

export default HeaderTitle;