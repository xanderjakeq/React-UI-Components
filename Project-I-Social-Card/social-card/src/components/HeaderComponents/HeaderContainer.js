import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = (props) => {
    return(
        <div className = 'header'>
            <ImageThumbnail url = {props.url}/>
            
            <div>
                <HeaderTitle displayName = {props.displayName} userName = {props.userName} day = {props.day} month = {props.month}/>
                <HeaderContent content = {props.content}/>
            </div>
        </div>
    )
}

export default HeaderContainer;