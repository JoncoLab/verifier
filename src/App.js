import React, {Component} from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Sign from "./components/Sign";
import Dashboard from "./components/dashboard/Dashboard";
import Cabinet from "./components/cabinet/Cabinet";
import Constructor from "./components/constructor/Constructor";
import {connect} from 'react-redux';
import {RenderFilters, setRenderFilter} from "./store/actions";
import * as $ from "jquery";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: document.cookie.replace("token=", "") !== "0"
        };

        this.renderApp = this.renderApp.bind(this);
    }
    componentWillMount() {
        if (this.state.active) {
            let currentPage = window.location.pathname,
                targetPage;

            switch (currentPage) {
                case "/":
                    targetPage = "RENDER_DASHBOARD";
                    break;
                case "/dashboard":
                    targetPage = "RENDER_DASHBOARD";
                    break;
                case "/cabinet":
                    targetPage = "RENDER_CABINET";
                    break;
                case "/constructor":
                    targetPage = "RENDER_CONSTRUCTOR";
                    break;
                case "/sign":
                    targetPage = "RENDER_SIGN";
                    break;
                case "/signOut":
                    document.cookie = "token=0;";
                    targetPage = "RENDER_SIGN";
                    break;
                default:
                    targetPage = "RENDER_SIGN";
            }
            this.props.renderTargetPage(targetPage);
        } else {
            this.props.renderTargetPage("RENDER_SIGN");
        }
    }
    renderApp(state = this.props.renderAppFilter) {
        let targetComponent;
        switch (state) {
            case 'RENDER_SIGN':
                targetComponent =
                    <Sign/>;
                break;
            case 'RENDER_DASHBOARD':
                targetComponent = <Dashboard token={this.state.token}/>;
                break;
            case 'RENDER_CABINET':
                targetComponent = <Cabinet token={this.state.token}/>;
                break;
            case 'RENDER_CONSTRUCTOR':
                targetComponent = <Constructor token={this.state.token}/>;
                break;
            default:
                document.cookie.replace("token=" + this.state.token + ";", "");
                targetComponent =
                    <Sign/>;
        }
        return targetComponent;
    }
    getUserData() {
        $.ajax({
            url: "http://185.4.75.58:8181/verifier/api/v1/user/customer/0",
            method: "GET",
            async: true,
            crossDomain: true,
            contentType: false,
            headers: {
                "Token": this.state.token
            }
        })
            .then((response) => {
                alert(response.code);
            }, (response) => {
                alert(
                    typeof response === "object" ?
                        JSON.stringify(response) :
                        response
                );
            });
    }
    render() {
        return (
            <div className="App">
                <Header/>
                {this.renderApp()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        renderTargetPage: (target) => {
            let targetPage;
            switch (target) {
                case "RENDER_SIGN":
                    targetPage = RenderFilters.RENDER_SIGN;
                    break;
                case "RENDER_DASHBOARD":
                    targetPage = RenderFilters.RENDER_DASHBOARD;
                    break;
                case "RENDER_CABINET":
                    targetPage = RenderFilters.RENDER_CABINET;
                    break;
                case "RENDER_CONSTRUCTOR":
                    targetPage = RenderFilters.RENDER_CONSTRUCTOR;
                    break;
                default:
                    targetPage = RenderFilters.RENDER_SIGN;
            }
            dispatch(setRenderFilter(targetPage))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

