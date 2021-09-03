import React from "react";
import styles from "./ChatList.module.css"

type ChatListItemPropsType = {
    imgSrc: string
    name: string
    message: string
}


export function ChatList() {
    let a = [
        {
            name: "Andrey",
            message: "Давно выяснено, что при оценке дизайна"
        },
        {
            name: "Ivan",
            message: "Lorem Ipsum обеспечивает более или менее стандартное заполнение шаблона"
        },
        {
            name: "Alix",
            message: "Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum"
        },
        {
            name: "Evgenii",
            message: "За прошедшие годы текст Lorem Ipsum получил много версий"
        },
    ]
    return (
        <ul className={styles.listGroup}>
            {a.map(e => {
                return (
                    <ChatListItem
                        imgSrc={'../../../../../../images/man_avatar1.jpg'}
                        name={e.name}
                        message={e.message}
                    />
                )
            })}
        </ul>
    )
}

function ChatListItem(props: ChatListItemPropsType) {
    const cutMessage = (text: string) => {
        let breakPoint = 30
        if (text.length > breakPoint) {
            return text.slice(0,breakPoint)+"..."
        } else {
            return text
        }
    }
    return (
        <li className={styles.listItem}>
            <div className={styles.avatar}>
                <img src={props.imgSrc} alt=""/>
            </div>
            <div className={styles.listItemBody}>
                <div>
                    <span className="personName">{props.name}</span>
                    <p>{cutMessage(props.message)}</p>
                </div>
            </div>
        </li>
    )
}