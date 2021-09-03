import React from "react";
import styles from "./MessagesSidebar.module.css"
import {ChatList} from "./ChatList/ChatList";

export function MessagesSidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.wrap}>
                <header className={styles.header}>
                    <span>Your chats</span>
                    <div>
                        <button>New chat</button>
                    </div>
                </header>
                <form>
                    <input type="text" placeholder={"Search"} className={styles.input}/>
                </form>
            </div>
            <body>
            <ChatList/>
            </body>
        </aside>
    )
}