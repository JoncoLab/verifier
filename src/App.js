import Header from "./components/header/header";
import React, { Component } from 'react';
import './styles/App.css';
import {Sign} from "./components/Sign";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div id="background">
                    <img alt="background" src="./img/decor.svg"/>
                </div>
                <Sign/>
            </div>
        );
    }
}

export default App;

