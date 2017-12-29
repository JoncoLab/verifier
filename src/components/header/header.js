import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import { I18n, Trans } from 'react-i18next';

class Header extends Component {
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <header className="navbar">
                            <Row bsClass="header-row">
                                <Col xsPull={3} md={3} mdPush={1} className="navbar-left">
                                    <button className="download-app">Скачать Приложение</button>
                                    <span className="lang">
                        <span id="ru" onClick={() => i18n.changeLanguage('ru')}>RU</span>
                        <span id="en" onClick={() => i18n.changeLanguage('en')}>EN</span>
                    </span>
                                </Col>
                                <Col md={2} mdOffset={2} className="navbar-center">
                                    <a href="#"><img title={t("header.logoTitleText")} alt="logo" src="../../img/logo.png"/></a>
                                </Col>
                                <Col md={2} mdPull={1} className="navbar-right">
                                    <span>FirstName</span>
                                    <span>LastName</span>
                                    <div className="profile-photo">
                                        <img alt="profile photo" src="../../img/user-login.svg"/>
                                    </div>
                                </Col>
                            </Row>
                        </header>
                    )
                }
            </I18n>
        );
    }
}

export default Header;