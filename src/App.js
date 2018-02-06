import React, {Component} from 'react';
import './styles/App.css';
import Header from "./components/Header";
import Sign from "./components/Sign";
import Dashboard from "./components/dashboard/Dashboard";
import Cabinet from "./components/cabinet/Cabinet";
import Constructor from "./components/constructor/Constructor";
import DownloadApp from "./components/DownloadApp";
import TemplatesDashboard from "./components/constructor/TemplatesDashboard";
import {connect} from 'react-redux';
import {RenderFilters, setRenderFilter} from "./store/actions";
import * as $ from "jquery";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: document.cookie.replace("token=", "") !== "0" && document.cookie.replace("token=", "") !== "",
            userData: {}
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
                case "/downloadApp":
                    targetPage = "RENDER_DOWNLOAD_LINKS";
                    break;
                case "/sign":
                    targetPage = "RENDER_SIGN";
                    break;
                case "/signOut":
                    document.cookie = "token=0;";
                    targetPage = "RENDER_SIGN";
                    break;
                case "/templates":
                    targetPage = "RENDER_TEMPLATES";
                    break;
                default:
                    targetPage = "RENDER_SIGN";
            }
            this.props.renderTargetPage(targetPage);
        } else {
            this.props.renderTargetPage("RENDER_SIGN");
        }
    }
    componentDidMount() {
        let token = document.cookie.includes("token") ?
            document.cookie.replace("token=", "") :
            "";
        if (token === "0" || token !== "") {
            let apiUrl = apiHost + "verifier/api/v1/user/customer/0",
                settings = {
                    async: true,
                    crossDomain: true,
                    method: "GET",
                    url: apiUrl,
                    headers: {
                        "Token": token
                    }
                };

            $.ajax(settings).done((response) => {
                this.setState({
                    userData: response.data
                });
            });
        } else {
            window.location.pathname = "/signOut";
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
                targetComponent = <Dashboard userData={this.state.userData}/>;
                break;
            case 'RENDER_CABINET':
                targetComponent = <Cabinet userData={this.state.userData}/>;
                break;
            case 'RENDER_CONSTRUCTOR':
                targetComponent = <Constructor/>;
                break;
            case 'RENDER_DOWNLOAD_LINKS':
                targetComponent = <DownloadApp/>;
                break;
            case 'RENDER_TEMPLATES':
                targetComponent = <TemplatesDashboard/>;
                break;
            default:
                document.cookie.replace("token=" + this.state.token + ";", "");
                targetComponent =
                    <Sign/>;
        }
        return targetComponent;
    }
    render() {
        return (
            <div className="App">
                <Header userData={this.state.userData}/>
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
                case "RENDER_DOWNLOAD_LINKS":
                    targetPage = RenderFilters.RENDER_DOWNLOAD_LINKS;
                    break;
                case "RENDER_TEMPLATES":
                    targetPage = RenderFilters.RENDER_TEMPLATES;
                    break;
                default:
                    targetPage = RenderFilters.RENDER_SIGN;
            }
            dispatch(setRenderFilter(targetPage))
        }
    })
};

export const apiHost = "/verifier/";

export default connect(mapStateToProps, mapDispatchToProps)(App);

