import React from 'react';
import {NavLink} from "react-router-dom";
import n from "../Navigation.module.css";
import human from "../../../images/svg/human.svg"
import messages from "../../../images/svg/messages.svg"
import music from "../../../images/svg/music.svg"
import news from "../../../images/svg/news.svg"
import settings from "../../../images/svg/settings.svg"


type NavElementPropsType = {
    title: string
    link: string
    // icon : any
}

function chooseSvg(title: string) {
    //Svg choosing
    if (title === "Profile") {
        return human;
    }
    if (title === "Messages") {
        return messages;
    }
    if (title === "Music") {
        return music;
    }
    if (title === "News") {
        return news;
    }
    if (title === "Settings") {
        return settings;
    }
    return "wtf"

}

function NavElement(props: NavElementPropsType) {


    return (
        <li className={n.navItem}>
            <NavLink to={props.link} className={n.navLink}>
                <img src={chooseSvg(props.title)} alt="" className={n.navImg}/>
                <span className={n.linkText}>{props.title}</span>
            </NavLink>
        </li>
    )
}

export default NavElement