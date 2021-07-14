import React from "react";
import PictureBlock from "./PictureBlock/PictureBlock";
import InformationBlock from "./InformationBlock";
import p from "./Profile.module.css"

function Profile() {
    return (
        <main className={p.main}>
            <div className={p.infoPart}>
            <PictureBlock/>
            <InformationBlock/>
            </div>
            <div className={p.posts}>
                My posts
            </div>
        </main>)
}

export default Profile;