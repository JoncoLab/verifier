import Header from "./components/header/header";
import React, { Component } from 'react';
import './styles/App.css';
import {Sign} from "./components/Sign";
import { I18n } from "react-i18next";

class App extends Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, { i18n }) => (
                        <div className="App">
                            <Header/>
                            <div id="background">
                                <img alt="background" src="./img/decor.svg"/>
                            </div>
                            <Sign/>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

export default App;

