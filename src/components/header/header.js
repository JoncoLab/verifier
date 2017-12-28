import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header className="navbar">
                <div className="navbar-left">
                    <button className="download-app">Download App</button>
                    <span className="lang">
                        <span id="ru">RU</span>
                        <span id="en">EN</span>
                    </span>
                </div>
                <div className="logo">
                    <img alt="logo" src="../../img/logo.png"/>
                </div>
                <div className="navbar-right">
                    <span>FirstName</span>
                    <span>LastName</span>
                    <div className="profile-photo">
                        <img alt="profile photo" src="../../img/user-login.svg"/>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;