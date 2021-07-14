import React from 'react';
import p from "./PictureBlock.module.css"
import profPic from "../../../images/prof.pic1.jpg"

function PictureBlock() {
    return (
        <div className={p.left}>
            <div className={p.profilePicture}>
                <img src={profPic} alt={"myPicture"}/>
            </div>
            <div className={p.buttonWrap}>
                <form className={`${p.formGroup}`}>
                    <input type="file" name="file" id="file" className={p.inputFile}/>
                    <label htmlFor="file" className={`${p.btn} ${p.btnTertiary} ${p.jsLabelFile}`}>
                        <span className={p.jsFileName}>Upload picture</span>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default PictureBlock;