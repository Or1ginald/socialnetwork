import React from "react";
import m from "./Messages.module.css"
import {MessagesSidebar} from "./MessagesSidebar/MessagesSidebar";
import {Chat} from "./Chat/Chat";

function Messages() {
    return (
        <div className={m.wrap}>
            <MessagesSidebar/>
            <Chat/>
        </div>
    )
}

export default Messages;