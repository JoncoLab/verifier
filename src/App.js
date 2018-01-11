import React, {Component} from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Sign from "./components/Sign";
import Dashboard from "./components/main/Dashboard";
import Cabinet from "./components/profile/Cabinet";
import Constructor from "./components/constructor/Constructor";
import {connect} from 'react-redux';

class App extends Component {
    renderApp() {
        switch (this.props.renderAppFilter) {

            case 'RENDER_SIGN':
                return <Constructor/>;

            case 'RENDER_DASHBOARD':
                return <Dashboard/>;

            case 'RENDER_CABINET':
                return <Cabinet/>;

            case 'RENDER_CONSTRUCTOR':
                return <Constructor/>;

            default:
                return <Sign/>
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                {this.renderApp()}
                <div id="background">
                    <img src="./img/decor.svg" alt="Background"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

export default connect(mapStateToProps)(App);

