import React from 'react'

import {MessageCircle, Repeat, Heart, Mail} from 'react-feather'
import feather from 'feather-icons'

import './Footer.css'
import { Circle } from 'react-feather';

const Footer = (props) => {
   return (
        <div className = "footer">
            <MessageCircle/>
            <span>{props.comments}</span>
            <Repeat/>
            <span>{props.retweets}</span>
            <Heart/>
            <span>{props.likes}</span>
            <Mail/>
            <span>{props.messages}</span>
        </div>
    );
}

export default Footer;