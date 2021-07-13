import React from "react";
import n from "./Navigation.module.css"

function Navigation() {
    return (
        <nav className={n.navbar}>
            <ul className={n.navbarNav}>
                <li className={n.logo}>
                    <a href="/#" className={n.navLink}>
                        <span className={`${n.linkText}  ${n.logoText}`}>Signal</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    className="faSecondary"
                                >.
                                </path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    className="faPrimary"
                                >.
                                </path>
                            </g>
                        </svg>
                    </a>
                </li>

                <li className={n.navItem}>
                    <a href="/#" className={n.navLink}>
                        <svg className={n.svg} fill="none" height="31" viewBox="0 0 20 20" width="31" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.84 15.63a6.97 6.97 0 008.32 0 8.2 8.2 0 00-8.32 0zM4.7 14.57a7 7 0 1110.6 0 9.7 9.7 0 00-10.6 0zM10 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-1.5 7a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5-3a3 3 0 100 6 3 3 0 000-6z"
                                fill="currentColor">.
                            </path>
                        </svg>
                        <span className={n.linkText}>Profile</span>
                    </a>
                </li>

                <li className={n.navItem}>
                    <a href="/#" className={n.navLink}>
                        <svg className={n.svg} width="31" height="31" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="message_outline_20__Page-2" stroke="none" fill="none">
                                <g id="message_outline_20__message_outline_20">
                                    <path id="message_outline_20__Shape" opacity=".4" d="M0 0h20v20H0z">.</path>
                                    <path
                                        d="M6.83 15.75c.2-.23.53-.31.82-.2.81.3 1.7.45 2.6.45 3.77 0 6.75-2.7 6.75-6s-2.98-6-6.75-6S3.5 6.7 3.5 10c0 1.21.4 2.37 1.14 3.35.1.14.16.31.15.49-.04.76-.4 1.78-1.08 3.13 1.48-.11 2.5-.53 3.12-1.22zM3.24 18.5a1.2 1.2 0 01-1.1-1.77A10.77 10.77 0 003.26 14 7 7 0 012 10c0-4.17 3.68-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.68 7.5-8.25 7.5c-.92 0-1.81-.13-2.66-.4-1 .89-2.46 1.34-4.35 1.4z"
                                        id="message_outline_20__Icon-Color" fill="currentColor">.
                                    </path>
                                </g>
                            </g>
                        </svg>
                        <span className={n.linkText}>Messages</span>
                    </a>
                </li>

                <li className={n.navItem}>
                    <a href="/#" className={n.navLink}>
                        <svg className={n.svg} width="31" height="31" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="newsfeed_outline_20__Icons" stroke="none" fill="none">
                                <g id="newsfeed_outline_20__Icons-20/newsfeed_outline_20">
                                    <g id="newsfeed_outline_20__newsfeed_outline_20">
                                        <path opacity=".04" d="M0 0h20v20H0z">.</path>
                                        <path
                                            d="M13.08 2c1.44 0 2.14.13 2.86.52a3.7 3.7 0 011.54 1.54c.39.72.52 1.42.52 2.86v6.16c0 1.44-.13 2.14-.52 2.86a3.7 3.7 0 01-1.54 1.54c-.72.39-1.42.52-2.86.52H6.92c-1.44 0-2.14-.13-2.86-.52a3.7 3.7 0 01-1.54-1.54c-.39-.72-.52-1.42-.52-2.86V6.92c0-1.44.13-2.14.52-2.86a3.7 3.7 0 011.54-1.54C4.78 2.13 5.48 2 6.92 2h6.16zm3.42 6h-13v5.08c0 1.21.09 1.68.35 2.15.2.4.52.71.92.92.47.26.94.35 2.15.35h6.16c1.21 0 1.68-.09 2.15-.35.4-.2.71-.52.92-.92.26-.47.35-.94.35-2.15V8zm-3.42-4.5H6.92c-1.21 0-1.68.09-2.15.35-.4.2-.71.52-.92.92-.23.42-.33.82-.35 1.73h13a3.48 3.48 0 00-.35-1.73 2.2 2.2 0 00-.92-.92c-.47-.26-.94-.35-2.15-.35z"
                                            id="newsfeed_outline_20__Icon-Color" fill="currentColor">.
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span className={n.linkText}>News</span>
                    </a>
                </li>

                <li className={n.navItem}>
                    <a href="/#" className={n.navLink}>
                        <svg className={n.svg} width="31" height="31" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <g id="music_outline_20__Icons" stroke="none" fill="none">
                                <g id="music_outline_20__Icons-20/music_outline_20">
                                    <g id="music_outline_20__music_outline_20">
                                        <path d="M0 0h20v20H0z">.</path>
                                        <path
                                            d="M14.73 2.05a2.28 2.28 0 012.75 2.23v7.99c0 3.57-3.5 5.4-5.39 3.51-1.9-1.9-.06-5.38 3.52-5.38h.37V6.76L8 8.43v5.82c0 3.5-3.35 5.34-5.27 3.62l-.11-.1c-1.9-1.9-.06-5.4 3.51-5.4h.37V6.24c0-.64.05-1 .19-1.36l.05-.13c.17-.38.43-.7.76-.93.36-.26.7-.4 1.41-.54zM6.5 13.88h-.37c-2.32 0-3.34 1.94-2.45 2.82.88.89 2.82-.13 2.82-2.45v-.37zm9.48-1.98h-.37c-2.32 0-3.34 1.94-2.46 2.82.89.89 2.83-.13 2.83-2.45v-.37zm-.02-7.78a.78.78 0 00-.92-.6L9.06 4.77c-.4.09-.54.15-.68.25a.8.8 0 00-.27.33c-.08.18-.1.35-.1.88v.67l7.97-1.67v-.95-.08z"
                                            id="music_outline_20__Icon-Color" fill="currentColor">.
                                        </path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <span className={n.linkText}>Music</span>
                    </a>
                </li>

                <li className={n.navItem} id="themeButton">
                    <a href="/#" className={n.navLink}>
                        <svg className={n.svg} fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="31px"
                             height="31px">
                            <path
                                d="M 9.6660156 2 L 9.1757812 4.5234375 C 8.3516137 4.8342536 7.5947862 5.2699307 6.9316406 5.8144531 L 4.5078125 4.9785156 L 2.171875 9.0214844 L 4.1132812 10.708984 C 4.0386488 11.16721 4 11.591845 4 12 C 4 12.408768 4.0398071 12.832626 4.1132812 13.291016 L 4.1132812 13.292969 L 2.171875 14.980469 L 4.5078125 19.021484 L 6.9296875 18.1875 C 7.5928951 18.732319 8.3514346 19.165567 9.1757812 19.476562 L 9.6660156 22 L 14.333984 22 L 14.824219 19.476562 C 15.648925 19.165543 16.404903 18.73057 17.068359 18.185547 L 19.492188 19.021484 L 21.826172 14.980469 L 19.886719 13.291016 C 19.961351 12.83279 20 12.408155 20 12 C 20 11.592457 19.96113 11.168374 19.886719 10.710938 L 19.886719 10.708984 L 21.828125 9.0195312 L 19.492188 4.9785156 L 17.070312 5.8125 C 16.407106 5.2676813 15.648565 4.8344327 14.824219 4.5234375 L 14.333984 2 L 9.6660156 2 z M 11.314453 4 L 12.685547 4 L 13.074219 6 L 14.117188 6.3945312 C 14.745852 6.63147 15.310672 6.9567546 15.800781 7.359375 L 16.664062 8.0664062 L 18.585938 7.40625 L 19.271484 8.5917969 L 17.736328 9.9277344 L 17.912109 11.027344 L 17.912109 11.029297 C 17.973258 11.404235 18 11.718768 18 12 C 18 12.281232 17.973259 12.595718 17.912109 12.970703 L 17.734375 14.070312 L 19.269531 15.40625 L 18.583984 16.59375 L 16.664062 15.931641 L 15.798828 16.640625 C 15.308719 17.043245 14.745852 17.36853 14.117188 17.605469 L 14.115234 17.605469 L 13.072266 18 L 12.683594 20 L 11.314453 20 L 10.925781 18 L 9.8828125 17.605469 C 9.2541467 17.36853 8.6893282 17.043245 8.1992188 16.640625 L 7.3359375 15.933594 L 5.4140625 16.59375 L 4.7285156 15.408203 L 6.265625 14.070312 L 6.0878906 12.974609 L 6.0878906 12.972656 C 6.0276183 12.596088 6 12.280673 6 12 C 6 11.718768 6.026742 11.404282 6.0878906 11.029297 L 6.265625 9.9296875 L 4.7285156 8.59375 L 5.4140625 7.40625 L 7.3359375 8.0683594 L 8.1992188 7.359375 C 8.6893282 6.9567546 9.2541467 6.6314701 9.8828125 6.3945312 L 10.925781 6 L 11.314453 4 z M 12 8 C 9.8034768 8 8 9.8034768 8 12 C 8 14.196523 9.8034768 16 12 16 C 14.196523 16 16 14.196523 16 12 C 16 9.8034768 14.196523 8 12 8 z M 12 10 C 13.111477 10 14 10.888523 14 12 C 14 13.111477 13.111477 14 12 14 C 10.888523 14 10 13.111477 10 12 C 10 10.888523 10.888523 10 12 10 z"/>
                        </svg>
                        <span className={n.linkText}>Settings</span>
                    </a>
                </li>
            </ul>
        </nav>)
}

export default Navigation;