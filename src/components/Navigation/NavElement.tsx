import React from 'react';
import n from "./Navigation.module.css";
import human from "../../images/svg/human.svg"
import messages from "../../images/svg/messages.svg"
import music from "../../images/svg/music.svg"
import news from "../../images/svg/news.svg"
import settings from "../../images/svg/settings.svg"



type NavElementPropsType = {
    title : string
}

let image: string

function NavElement(props: NavElementPropsType){

    //Svg choosing
    if(props.title === "Profile"){
        image = human;
    }
    if(props.title === "Messages"){
        image = messages;
    }
    if(props.title === "Music"){
        image = music;
    }
    if(props.title === "News"){
        image = news;
    }
    if(props.title === "Settings"){
        image = settings;
    }

    return(
        <li className={n.navItem}>
            <a href="/#" className={n.navLink}>
                <img src={image} alt="" className={n.navImg}/>
                <span className={n.linkText}>{props.title}</span>
            </a>
        </li>
    )
}

export default  NavElement;