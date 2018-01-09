import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/header";
import Main from "./components/main/main";
import {Sign} from "./components/Sign";
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
                                <Main/>
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

