import React from 'react';
import a from './App.module.css';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile/Profile";
// import Messages from "./components/MainContent/Messages";

function App() {
    return (
        <div className="App">
            <div className={a.appWrapper}>
                <Navigation/>
                <div className={a.content}>
                    <Profile/>
                    {/*<Messages />*/}
                </div>
            </div>
        </div>
    );
}

export default App;
