import React, {Component} from 'react';
import './styles/App.css';
import Header from "./components/header/Header";
import Sign from "./components/Sign";
import Dashboard from "./components/dashboard/Dashboard";
import Cabinet from "./components/cabinet/Cabinet";
import Constructor from "./components/constructor/Constructor";
import {connect} from 'react-redux';
import {RenderFilters, setRenderFilter} from "./store/actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: "",
            active: document.cookie.includes("token")
        };

        this.Start = this.Start.bind(this);
    }
    Start(state = this.props.renderAppFilter) {
        let targetComponent;
        switch (state) {
            case 'RENDER_SIGN':
                targetComponent =
                    <Sign parseToken={
                        (token) => {
                            this.setState({
                                token: token
                            });
                        }
                    }/>;
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
                    <Sign parseToken={
                        (token) => {
                            this.setState({
                                token: token
                            });
                        }
                    }/>;
        }
        return targetComponent;
    }
    Continue() {
        let token = document.cookie
                .split(";")
                .find((element) => {
                    return element.includes("token=");
                })
                .replace("token=", ""),
            currentPage = window.location.pathname,
            targetPage;

        this.setState({
            token: token
        });

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
                document.cookie.replace("token=" + token + ";", "");
                break;
            default:
                document.cookie.replace("token=" + token + ";", "");
                targetPage = "RENDER_SIGN";
        }
        this.props.renderTargetPage(targetPage);
    }
    render() {
        return (
            <div className="App">
                <Header/>
                {
                    this.props.renderTargetPage(
                        this.state.active ?
                            this.Continue :
                            this.Start
                    )
                }
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

