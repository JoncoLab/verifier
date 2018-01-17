import React, {Component} from 'react';
import { I18n } from 'react-i18next';
import {RenderFilters, setRenderFilter} from "../../store/actions";
import {connect} from 'react-redux';
import classSet from 'react-classset';
import * as $ from "jquery";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: {}
        }
    }
    componentDidMount() {
        let token = document.cookie.replace("token=", ""),
            herokuAppUrl = "https://cors-anywhere.herokuapp.com/",
            apiUrl = "http://185.4.75.58:8181/verifier/api/v1/user/customer/0",
            settings = {
                async: true,
                crossDomain: true,
                method: "GET",
                url: herokuAppUrl + apiUrl,
                headers: {
                    "Token": token
                }
            };

        $.ajax(settings)
            .then((response) => {
                this.setState({
                    userData: response.data
                });
            }, (error) => {
                alert(error);
            });
    }
    render() {
        const downloadBtnStyle = classSet({
            'download-app': true,
            'hide': this.props.renderAppFilter === 'RENDER_SIGN'
        });
        const navbarRightStyle = classSet({
            'navbar-right': true,
            'hide': this.props.renderAppFilter === 'RENDER_SIGN'
        });
        return (
                <I18n ns="translations">
                    {
                        (t, {i18n}) => (
                            <header>
                                <div className="header-row">
                                    <div className="navbar-left">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                window.location.pathname = "/downloadApp";
                                            }}
                                            className={downloadBtnStyle}
                                        >{t("header.appsButtonText")}</button>
                                        <span className="lang">
                                            <span id="ru" onClick={() => i18n.changeLanguage('ru')}>RU</span>
                                            <span id="en" onClick={() => i18n.changeLanguage('en')}>EN</span>
                                        </span>
                                    </div>
                                    <div className="navbar-center">
                                        <a
                                            onClick={() => {
                                                if(this.props.renderAppFilter !== 'RENDER_DASHBOARD'
                                                    && this.props.renderAppFilter !== 'RENDER_SIGN') {
                                                    this.props.onLogoClick()
                                                }
                                            }}
                                        >
                                            <img title={t("header.logoTitleText")} alt="logo" src="../../img/logo.png"/>
                                        </a>
                                    </div>
                                    <div className={navbarRightStyle} onClick={() => {
                                        window.location.pathname = "/cabinet";
                                    }}
                                        >
                                        <span>{this.state.userData.firstName}</span>
                                        <span>{this.state.userData.lastName}</span>
                                        <div className="profile-photo">
                                            <img alt="profile photo" src={this.state.userData.photo}/>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        )
                    }
                </I18n>
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
        onHeaderClick: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_CABINET))
        },

        onLogoClick: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
