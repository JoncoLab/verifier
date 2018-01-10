import React, {Component} from 'react';
import { I18n, Trans } from 'react-i18next';
import classSet from 'react-classset';
import {TaskInfo} from "./taskInfo";
import {connect} from 'react-redux';
import {openMain} from "../../store/actions";

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changePassActive: false
        };

        this.changePassActive = this.changePassActive.bind(this);
    }

    changePassActive() {
        this.setState({
            changePassActive: true
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
                                    <img alt="User photo" className="profile-photo"/>
                                    <input
                                        type="text"
                                        id="profile-name"
                                        value={this.props.value}/>
                                    <input
                                        type="text"
                                        value="ID: 0123456789"
                                        readOnly={true}
                                        disabled={true}/>
                                    <button
                                        className="back-to-main"
                                        onClick={this.props.backToMainOnClick}
                                    >{t("profile.backToMain")}
                                    </button>
                                    <button
                                        className="change-password"
                                        onClick={this.changePassActive}
                                    >{t("profile.changePassBtn")}
                                    </button>
                                    <button className="exit-profile">{t("profile.exitProfile")}</button>
                                </div>
                            </div>
                            <form className={changePass}>
                                <label htmlFor="change-pass-input">{t("profile.newPassLabel")}</label>
                                <input type="password" name="change-password" id="change-pass-input" required={true}/>
                                <input type="submit" id="change-pass-submit" value={t("profile.newPassSubmit")} required={true}/>
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
        profileProps: state.showProfile.profileState
    };
};

const mapDispatchToProps = (dispatch, state) => ({
    backToMainOnClick() {
        if(state.showProfile.profileState) dispatch(openMain(false))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);