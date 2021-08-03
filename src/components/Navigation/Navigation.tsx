import React from "react";
import n from "./Navigation.module.css"
import NavElement from "./NavItems/NavElement";
import Logo from "./NavItems/Logo"

function Navigation() {
    return (
        <nav className={n.navbar}>
            <ul className={n.navbarNav}>
                <Logo title={"Signal"} link={"/profile"}/>
                <NavElement title={"Profile"} link={"/profile"}/>
                <NavElement title={"Messages"} link={"/messages"}/>
                <NavElement title={"News"} link={"/news"}/>
                <NavElement title={"Music"} link={"/music"}/>
                <NavElement title={"Settings"} link={"/settings"}/>
            </ul>
        </nav>)
}

export default Navigation;