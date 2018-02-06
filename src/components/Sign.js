import React, {Component} from "react";
import {I18n} from "react-i18next";
import * as $ from "jquery";
import {RenderFilters, setRenderFilter} from "../store/actions";
import {connect} from 'react-redux';


class Sign extends Component {
    firsSignUpStepProps = {
        email: null,
        password: null
    };
    SignIn = (
        <I18n ns="translations">
            {
                (t) => (
                    <form name="sign-in-form" id="sign-in-form"
                          onSubmit={this.handleSign}>
                        <img
                            className="sign-form-icon"
                            src={"img/icon_login.svg"}
                            alt="Sign form icon"
                        />
                        <h2 className="form-caption">{t("sign.caption")}</h2>
                        <p className="err">
                            {
                                this.state.error === null ?
                                    "" :
                                    t("sign.errors." + this.state.error)
                            }
                        </p>
                        <input
                            type="email"
                            name="sign-in-email"
                            id="sign-in-email"
                            placeholder={t("sign.in.emailPlaceholder")}
                            required
                        />
                        <input
                            type="password"
                            name="sign-in-password"
                            id="sign-in-password"
                            placeholder={t("sign.in.passPlaceholder")}
                            required
                        />
                        <input
                            type="submit"
                            name="sign-in-submit"
                            id="sign-in-submit"
                        />
                        <label htmlFor="sign-in-submit"><span>☺</span> {t("sign.in.submitText")}</label>
                    </form>
                )
            }
        </I18n>
    );
    SignUp1 = (
        <I18n ns="translations">
            {
                (t) => (
                    <form
                        name="sign-up-form"
                        id="sign-up-form"
                        onSubmit={this.handleSign}
                    >
                        <img
                            className="sign-form-icon"
                            src={"img/icon_login.svg"}
                            alt="Sign form icon"
                        />
                        <p className="err">
                            {
                                this.state.error === null ?
                                    "" :
                                    t("sign.errors." + this.state.error)
                            }
                        </p>
                        <input
                            type="email"
                            name="sign-up-email"
                            id="sign-up-email"
                            placeholder={t("sign.up.emailPlaceholder")}
                            required
                        />
                        <input
                            type="password"
                            name="sign-up-password"
                            id="sign-up-password"
                            placeholder={t("sign.up.passPlaceholder")}
                            required
                        />
                        <input
                            type="password"
                            name="sign-up-password-confirm"
                            id="sign-up-password-confirm"
                            placeholder={t("sign.up.confirmPassPlaceholder")}
                            required
                        />
                        <input
                            type="submit"
                            name="sign-up-submit"
                            id="sign-up-submit"
                        />
                        <label htmlFor="sign-up-submit">{t("sign.up.submitText")}</label>
                    </form>
                )
            }
        </I18n>
    );
    SignUp2 = (
        <I18n ns="translations">
            {
                (t) => (
                    <form
                        name="sign-up-form"
                        id="sign-up-form"
                        onSubmit={this.handleSign}
                    >
                        <img
                            className="sign-form-icon"
                            src={"img/icon_login.svg"}
                            alt="Sign form icon"
                        />
                        <p className="err">
                            {
                                this.state.error === null ?
                                    "" :
                                    t("sign.errors." + this.state.error)
                            }
                        </p>
                        <div className="sign-up-name">
                            <input
                                type="text"
                                name="first-name"
                                id="first-name"
                                placeholder={t("sign.up.firstNamePlaceholder")}
                                required
                            />
                            <input
                                type="text"
                                name="second-name"
                                id="second-name"
                                placeholder={t("sign.up.secondNamePlaceholder")}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            placeholder={t("sign.up.companyNamePlaceholder")}
                        />
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder={t("sign.up.phonePlaceholder")}
                            required
                        />
                        <label>
                            {
                                t("sign.up.birthDatePlaceholder")
                            }
                            <input
                                type="date"
                                name="birth-date"
                                id="birth-date"
                                title={t("sign.up.birthDatePlaceholder")}
                                required
                            />
                        </label>
                        <label>
                            {
                                t("sign.up.photoPlaceholder")
                            }
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                title={t("sign.up.photoPlaceholder")}
                                onChange={Sign.loadPhoto}
                            />
                        </label>
                        <input
                            type="submit"
                            name="sign-up-submit"
                            id="sign-up-submit"
                        />
                        <label htmlFor="sign-up-submit">{t("sign.up.submitText")}</label>
                    </form>
                )
            }
        </I18n>
    );
    static proceedToDashboard(token) {
        document.cookie = "token=" + token + ";";
        window.location.pathname = "/dashboard";
    }
    static loadPhoto() {
        let input = document.getElementById("photo");
        if (input.files.length > 0) {
            let reader = new FileReader(),
                image = input.files[0];
            reader.readAsDataURL(image);
            reader.onloadend = () => {
                input.decoded = reader.result;
            }
        } else {
            input.decoded = "";
        }
    }
    static getVal(id) {
        let element = document.getElementById(id);
        return element.decoded ? element.decoded : element.value;
    }
    constructor(props) {
        super(props);

        this.parseToken = props.parseToken;

        this.state = {
            type: 0,
            error: null,
        };

        this.switcher = this.switcher.bind(this);
        this.handleSign = this.handleSign.bind(this);
        this.signInUser = this.signInUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        this.showError = this.showError.bind(this);
        this.sendRequest = this.sendRequest.bind(this);
        this.proceedToSecondStep = this.proceedToSecondStep.bind(this);
        this.renderForm = this.renderForm.bind(this);
    }
    showError(err) {
        this.setState({
            error: err
        });
    }
    sendRequest(settings) {
        $.ajax(settings)
            .then((response) => {
                /**
                 * @property token Token returned by server
                 */
                Sign.proceedToDashboard(
                    this.state.type === 2 ?
                        JSON.parse(response).data.token :
                        response.data.token
                );
            }, (response) => {
                alert(
                    typeof response === "object" ?
                        (
                            "Code: " + JSON.parse(response.responseText).code + ";\r\nMessage: " +
                            JSON.parse(response.responseText).error + "; \r\nMethod: " +
                            JSON.parse(response.responseText).method + ";"
                        ) :
                        response
                );
            })
    }
    switcher() {
        this.setState({
            type: this.state.type === 0 ? 1 : 0
        });
        this.showError(null);
    }
    signInUser() {
        let fields = JSON.stringify({
                email: Sign.getVal("sign-in-email"),
                password: Sign.getVal("sign-in-password")
            }),
            apiUrl = "/verifier/verifier/api/v1/user/customer/login",
            settings = {
                async: true,
                crossDomain: true,
                url: apiUrl,
                method: "POST",
                processData: false,
                data: fields,
                headers: {
                    "Content-Type": "application/json"
                }
            };
        this.sendRequest(settings);
    }
    proceedToSecondStep() {
        let pass = Sign.getVal("sign-up-password"),
            conf = Sign.getVal("sign-up-password-confirm"),
            email = Sign.getVal("sign-up-email");
        if (pass !== conf)
            this.showError("passwordsDoNotMatch");
        else {
            this.firsSignUpStepProps.email = email;
            this.firsSignUpStepProps.password = pass;

            this.setState({
                type: 2
            });
        }
    }
    signUpUser() {
        let intDate = () => {
                let strDate = Sign.getVal("birth-date"),
                    Y = strDate.substring(0, 4),
                    M = strDate.substring(5, 7),
                    D = strDate.substr(-2, 2);
                return parseInt(D + M + Y, 10);
            },
            apiUrl = "/verifier/verifier/api/v1/user/customer/registration",
            fields = new FormData();

        fields.append("photo", Sign.getVal("photo"));
        fields.append("email", this.firsSignUpStepProps.email);
        fields.append("password", this.firsSignUpStepProps.password);
        fields.append("phone", Sign.getVal("phone"));
        fields.append("firstName", Sign.getVal("first-name"));
        fields.append("lastName", Sign.getVal("second-name"));
        fields.append("birthDate", intDate());
        fields.append("type", "USER");
        fields.append("companyName", Sign.getVal("company-name"));

        let settings = {
            url: apiUrl,
            data: fields,
            processData: false,
            method: "POST",
            async: true,
            crossDomain: true,
            contentType: false,
            mimeType: "multipart/form-data"
        };

        this.sendRequest(settings);
    }
    handleSign(e) {
        e.preventDefault();
        this.showError(null);
        switch (this.state.type) {
            case 0:
                this.signInUser();
                break;
            case 1:
                this.proceedToSecondStep();
                break;
            case 2:
                this.signUpUser();
                break;
            default:
                this.showError("stepError");
        }
    }
    renderForm() {
        let targetForm;
        switch (this.state.type) {
            case 0:
                targetForm = this.SignIn;
                break;
            case 1:
                targetForm = this.SignUp1;
                break;
            case 2:
                targetForm = this.SignUp2;
                break;
            default:
                targetForm = this.SignIn;
        }
        return targetForm;
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <section className="sign">
                            {this.renderForm()}
                            {/*<div className="sign-in-with-socials">*/}
                                {/*<button className="fb"><img src="../img/facebook.png" alt={"FB"}/></button>*/}
                                {/*<button className="tw"><img src="../img/twitter.png" alt={"TW"}/></button>*/}
                            {/*</div>*/}
                            <button
                                className="switch-link"
                                onClick={this.switcher}
                            >
                                {
                                    t(this.state.type === 0 ?
                                        "sign.in.switchLinkText" :
                                        "sign.up.switchLinkText"
                                    )
                                }
                            </button>
                        </section>
                    )
                }
            </I18n>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        signInEvent: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Sign)