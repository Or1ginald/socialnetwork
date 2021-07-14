import React from 'react';
import a from './App.module.css';
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <div className={a.appWrapper}>
            <Navigation/>
            <Profile/>
            </div>
        </div>
    );
}

export default App;
