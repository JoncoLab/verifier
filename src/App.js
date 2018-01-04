import React, { Component } from 'react';
import './styles/App.css';
import Header from "./components/header/header";
import {Main} from "./components/main/main";
import {Sign} from "./components/Sign";
import { I18n } from "react-i18next";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
          profile: props.activeProfile
        };
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, { i18n }) => (
                        <div className="App">
                            <Header/>
                            <Main/>
                            {/*<Sign/>*/}
                            <div id="background">
                                <img alt="background" src="./img/decor.svg"/>
                            </div>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

export default App;

