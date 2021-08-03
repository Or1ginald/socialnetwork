import React from 'react';
import a from './App.module.css';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Messages from "./components/MainContent/Messages";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className={a.appWrapper}>
                    <Navigation/>
                    <div className={a.content}>
                        <Route path={'/profile'}>
                            <Profile/>
                        </Route>
                        <Route path={'/messages'}>
                            <Messages/>
                        </Route>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
