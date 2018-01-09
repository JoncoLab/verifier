import React, {Component} from 'react';
import { I18n, Trans } from 'react-i18next';
import {connect} from 'react-redux';
import {openMain} from "../../store/actions";

class Header extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        console.log(this.props.profileProps);
        return (
                <I18n ns="translations">
                    {
                        (t, {i18n}) => (
                            <header className="navbar">
                                <div className="header-row">
                                    <div className="navbar-left">
                                        <button className="download-app">{t("header.appsButtonText")}</button>
                                        <span className="lang">
                        <span id="ru" onClick={() => i18n.changeLanguage('ru')}>RU</span>
                        <span id="en" onClick={() => i18n.changeLanguage('en')}>EN</span>
                    </span>
                                    </div>
                                    <div className="navbar-center">
                                        <a onClick={this.props.onHeaderClick}>
                                            <img title={t("header.logoTitleText")} alt="logo" src="../../img/logo.png"/>
                                        </a>
                                    </div>
                                    <div className="navbar-right">
                                        <span>FirstName</span>
                                        <span>LastName</span>
                                        <div className="profile-photo">
                                            <img alt="profile photo" src="../../img/user-login.svg"/>
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
        profileProps: state.showProfile.profileState
    }
};

const mapDispatchToProps = (dispatch) => ({
    onHeaderClick() {
        dispatch(openMain(true))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
