import React, {Component} from 'react';
import { I18n, Trans } from 'react-i18next';

class Header extends Component {
    render() {
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
                                    <a href="#"><img title={t("header.logoTitleText")} alt="logo" src="../../img/logo.png"/></a>
                                </div>
                                <div className="navbar-right" onClick={this.handleEvent}>
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

export default Header;