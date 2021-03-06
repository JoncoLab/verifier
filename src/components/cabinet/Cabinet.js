import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from 'react-classset';
import TaskInfo from "../stateLess/TaskInfo";
import {connect} from 'react-redux';
import * as $ from "jquery";
import {apiHost} from "../../App";

class Cabinet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changePassActive: false
        };

        this.userData = this.props.userData;
        this.changePassActive = this.changePassActive.bind(this);
        this.userDataChange = this.userDataChange.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changePass = this.changePass.bind(this);
    }
    changePassActive() {
        this.setState({
            changePassActive: !this.state.changePassActive
        })
    }
    userDataChange(data) {
        let token = document.cookie.replace("token=", ""),
            apiUrl = apiHost + "verifier/api/v1/user/customer/update",
            settings = {
                url: apiUrl,
                method: "POST",
                crossDomain: true,
                async: true,
                processData: false,
                contentType: false,
                data: data,
                mimeType: "multipart/form-data",
                headers: {
                    "Token": token
                }
            };

        $.ajax(settings)
            .then(() => {
                window.location.reload();
            }, (response) => {
                console.log(response);
            });
    }
    changeName() {
        let data = new FormData(),
            name = document.getElementById("profile-first-name").value.split(" "),
            firstName, lastName = "";

        for (let i = 0; i < name.length; i++) {
            if (i === 0) {
                firstName = name[i];
            } else if (i !== name.length - 1) {
                lastName += name[i] + " ";
            } else {
                lastName += name[i];
            }
        }

        data.append("firstName", firstName);
        data.append("lastName", lastName);

        this.userDataChange(data);
    }
    changePass(event) {
        event.preventDefault();

        let data = new FormData();

        data.append("password", document.getElementById("change-pass-input").value);

        this.userDataChange(data);
    }
    render() {
        let changePass = classSet({
            'change-password': true,
            'active': this.state.changePassActive
        });
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="profile">
                                <div className="profile-top">
                                    <div className="user-info">
                                        <img
                                            alt="User photo"
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
                                            className="profile-photo"
                                        />
                                        <div className="user-data">
                                            <input
                                                type="text"
                                                id="profile-first-name"
                                                name="profile-name"
                                                placeholder={this.props.userData.firstName + ' ' + this.props.userData.lastName}
                                                value={this.props.value}
                                                defaultValue={this.props.userData.lastName}
                                                onBlur={this.changeName}
                                            />
                                            <span id="profile-id">{"Email: " + this.props.userData.email}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="back-to-main"
                                        onClick={() => {
                                            window.location.pathname = "/dashboard"
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
                                            window.location.pathname = "/signOut"
                                        }}>{t("profile.exitProfile")}</button>
                                    </div>
                                </div>
                                <form className={changePass} onSubmit={(e) => this.changePass(e)}>
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
                        </main>
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

export default connect(mapStateToProps)(Cabinet);