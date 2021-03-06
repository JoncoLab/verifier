import React, {Component} from 'react';
import { I18n } from 'react-i18next';
import {RenderFilters, setRenderFilter} from "../store/actions";
import {connect} from 'react-redux';
import classSet from 'react-classset';

class Header extends Component {
    render() {
        const downloadBtnStyle = classSet({
            'download-app': true,
            'hide': this.props.renderAppFilter === 'RENDER_SIGN'
        });
        const navbarRightStyle = classSet({
            'navbar-right': true,
            'hidden': this.props.renderAppFilter === 'RENDER_SIGN'
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
                                            <img
                                                title={t("header.logoTitleText")}
                                                alt="logo"
                                                src="../img/logo.png"
                                                style={{
                                                    cursor: "pointer"
                                                }}
                                            />
                                        </a>
                                    </div>
                                    <div className={navbarRightStyle} onClick={() => {
                                        window.location.pathname = "/cabinet";
                                    }}
                                        >
                                        <span>{this.props.renderAppFilter === 'RENDER_SIGN'?
                                            "" :
                                            this.props.userData ?
                                                this.props.userData.firstName :
                                                ""
                                        }</span>
                                        <span>{this.props.renderAppFilter === 'RENDER_SIGN' ?
                                            "" :
                                            this.props.userData ?
                                                this.props.userData.lastName :
                                                ""
                                        }</span>
                                        <div className="profile-photo">
                                            <img
                                                alt="profile photo"
                                                src={
                                                    this.props.userData ?
                                                        this.props.userData.photo ?
                                                            (
                                                                this.props.userData.photo.slice(this.props.userData.photo.length - 4) === "null" ?
                                                                    "img/user-login.svg" :
                                                                    this.props.userData.photo
                                                            ) : "img/user-login.svg" :
                                                        "img/user-login.svg"
                                                }
                                            />
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
