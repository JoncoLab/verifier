import React, {Component} from 'react';
import { I18n } from 'react-i18next';
import classSet from 'react-classset';
import {TaskInfo} from "../main/TaskInfo";
import {RenderFilters, setRenderFilter} from "../../store/actions";
import {connect} from 'react-redux';
import * as $ from "jquery";

class Cabinet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changePassActive: false
        };

        this.changePassActive = this.changePassActive.bind(this);
    }

    static getUserData(token) {
        $.ajax({
            url: "http://185.4.75.58:8181/verifier/api/v1/user/customer/0",
            method: "GET",
            async: true,
            crossDomain: true,
            contentType: false,
            headers: {
                "Token": token
            }
        })
            .then(
                (response) => {
                    alert(response);
                }, (response) => {
                    alert(JSON.stringify(response));
                });
    }

    changePassActive() {
        this.setState({
            changePassActive: !this.state.changePassActive
        })
    }

    render() {
        let changePass = classSet({
            'change-password': true,
            'active': this.state.changePassActive
        });

        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <section className="profile">
                            <div className="profile-top">
                                <div className="user-info">
                                    <img alt="User photo" src="../../img/user-login.svg" className="profile-photo"/>
                                    <div className="user-data">
                                        <input
                                            type="text"
                                            id="profile-name"
                                            placeholder="Vasya Lol"
                                            value={this.props.value}/>
                                        <input
                                            type="text"
                                            id="profile-id"
                                            value="ID: 0123456789"
                                            readOnly={true}
                                            disabled={true}/>
                                    </div>
                                </div>
                                <button
                                    className="back-to-main"
                                    onClick={() => {
                                        if(this.props.renderAppFilter === 'RENDER_CABINET') this.props.fromCabinetToDashboard()
                                    }}
                                >{t("profile.backToMain")}
                                </button>
                                <div className="profile-change-pass-btn">
                                    <button
                                        className="change-password-btn"
                                        onClick={this.changePassActive}
                                    >{t("profile.changePassBtn")}
                                    </button>
                                    <button className="exit-profile-btn" onClick={() => {
                                        if(this.props.renderAppFilter !== 'RENDER_SIGN') this.props.exitCabinetEvent()
                                    }}>{t("profile.exitProfile")}</button>
                                </div>
                            </div>
                            <form className={changePass}>
                                <label htmlFor="change-pass-input">{t("profile.newPassLabel")}</label>
                                <input type="password" name="change-password" id="change-pass-input" required={true}/>
                                <button type="submit" id="change-pass-submit">{t("profile.newPassSubmit")}</button>
                            </form>
                            <div className="profile-bottom">
                                <TaskInfo
                                    index={4}
                                    text={t("profile.tasksCreated")}/>
                                <TaskInfo
                                    index={3}
                                    text={t("profile.tasksWaitingForVerifier")}/>
                                <TaskInfo
                                    index={2}
                                    text={t("profile.tasksInProcess")}/>
                                <TaskInfo
                                    index={1}
                                    text={t("profile.tasksDone")}/>
                            </div>
                        </section>
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
    return {
        fromCabinetToDashboard: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        },

        exitCabinetEvent: () => {
          dispatch(setRenderFilter(RenderFilters.RENDER_SIGN))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet);