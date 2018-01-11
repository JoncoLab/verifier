import React, {Component} from 'react';
import { I18n } from 'react-i18next';
import {RenderFilters, setRenderFilter} from "../../store/actions";
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        console.log(this.props.renderAppFilter);

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
                                        <a>
                                            <img title={t("header.logoTitleText")} alt="logo" src="../../img/logo.png"/>
                                        </a>
                                    </div>
                                    <div className="navbar-right" onClick={() => {
                                        if(this.props.renderAppFilter !== 'RENDER_CABINET' && this.props.renderAppFilter !== 'RENDER_SIGN') {
                                            this.props.onHeaderClick()
                                        }
                                    }}
                                        >
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
        renderAppFilter: state.renderAppReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        onHeaderClick: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_CABINET))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
