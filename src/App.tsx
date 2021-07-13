import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";

function App() {
    return (
        <div className="App">
            <div className={'appWrapper'}>
            <Navigation/>
            <Profile/>
            </div>
        </div>
    );
}

export default App;
