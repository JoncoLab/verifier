import React, {Component} from 'react';
import './styles/App.css';
import { I18n } from "react-i18next";
import Header from "./components/header/Header";
import Sign from "./components/Sign";
import Dashboard from "./components/main/Dashboard";
import Cabinet from "./components/profile/Cabinet";
import Constructor from "./components/constructor/Constructor";
import {connect} from 'react-redux';

class App extends Component {
    render() {
        const appFilter = this.props.renderAppFilter;
        const sign = 'RENDER_SIGN';
        const dashboard = 'RENDER_DASHBOARD';
        const cabinet = 'RENDER_CABINET';
        const constructor = 'RENDER_CONSTRUCTOR';

        console.log(appFilter);

        switch (appFilter) {
            case sign:
                return (
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
                );
            case dashboard:
                return (
                    <I18n ns="translations">
                        {
                            (t, { i18n }) => (
                                <div className="App">
                                    <Header/>
                                    <main><Dashboard/></main>
                                    <div id="background">
                                        <img alt="background" src="./img/decor.svg"/>
                                    </div>
                                </div>
                            )
                        }
                    </I18n>
                );
            case cabinet:
                return (
                    <I18n ns="translations">
                        {
                            (t, { i18n }) => (
                                <div className="App">
                                    <Header/>
                                    <main><Cabinet/></main>
                                    <div id="background">
                                        <img alt="background" src="./img/decor.svg"/>
                                    </div>
                                </div>
                            )
                        }
                    </I18n>
                );
            case constructor:
                return (
                    <I18n ns="translations">
                        {
                            (t, { i18n }) => (
                                <div className="App">
                                    <Header/>
                                    <Constructor/>
                                    <div id="background">
                                        <img alt="background" src="./img/decor.svg"/>
                                    </div>
                                </div>
                            )
                        }
                    </I18n>
                );
            default:
                return (
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
                )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

export default connect(mapStateToProps)(App);

