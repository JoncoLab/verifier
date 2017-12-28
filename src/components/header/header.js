import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import {Row} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <Row bsClass="header-row">
                    <Col xs={5} xsPush={0.5} md={3} mdPush={1} className="navbar-left">
                        <button className="download-app">Скачать Приложение</button>
                        <span className="lang">
                        <span id="ru">RU</span>
                        <span id="en">EN</span>
                    </span>
                    </Col>
                    <Col xs={4} md={4} mdOffset={1} className="navbar-center">
                        <img alt="logo" src="../../img/logo.png"/>
                    </Col>
                    <Col xs={3} xsPull={2} md={2} mdPull={1} className="navbar-right">
                        <span>FirstName</span>
                        <span>LastName</span>
                        <div className="profile-photo">
                            <img alt="profile photo" src="../../img/user-login.svg"/>
                        </div>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Header;