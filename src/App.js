import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Dashboard from "./components/main/Dashboard";
import Cabinet from "./components/profile/Cabinet";
import Sign from "./components/Sign";
import { I18n } from "react-i18next";
import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <I18n ns="translations">
                    {
                        (t, { i18n }) => (
                            <div className="App">
                                <Header/>
                                <Sign/>
                                <div id="background">
                                    <img alt="background" src="./img/decor.svg"/>
                                </div>
                            </div>
                        )
                    }
                </I18n>
            </Provider>
        );
    }
}

export default App;

