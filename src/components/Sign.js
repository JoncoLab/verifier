import React, {Component} from "react";
import { I18n, Trans } from "react-i18next";
import * as $ from "jquery";


export class Sign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "in",
            error: null
        };

        this.switcher = this.switcher.bind(this);
        this.handleSign = this.handleSign.bind(this);
        this.signInUser = this.signInUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        this.showError = this.showError.bind(this);
    }
    static getVal(id) {
        let element = document.getElementById(id);
        return element.value;
    }
    showError(err) {
        this.setState({
            error: err
        });
    }
    switcher() {
        this.setState({
            type: this.state.type === "in" ? "up" : "in"
        });
        this.showError(null);
    }
    signInUser() {
        // Easy
        let fields = {
            email: Sign.getVal("sign-in-email"),
            password: Sign.getVal("sign-in-password")
        };
        this.showError("noSuchUser");
    }
    signUpUser() {
        // Difficult
        let fields = {
            firstName: Sign.getVal("first-name"),
            secondName: Sign.getVal("second-name"),
            companyName: Sign.getVal("company-name"),
            birthDate: Sign.getVal("birth-date"),
            phone: Sign.getVal("phone"),
            email: Sign.getVal("sign-up-email"),
            password: Sign.getVal("sign-up-password"),
            passwordConfirm: Sign.getVal("sign-up-password-confirm"),
            photo: Sign.getVal("photo")
        };
        if (fields.password !== fields.passwordConfirm) {
            this.showError("passwordsDoNotMatch");
        } else {
            alert("Temporary success");
        }
    }
    handleSign(e) {
        e.preventDefault();
        this.showError(null);
        this.state.type === "in" ?
            this.signInUser() :
            this.signUpUser();
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t, {i18n}) => (
                        <section className="sign">
                            {
                                this.state.type === "in" ?
                                    (
                                        <form id="sign-in-form" onSubmit={this.handleSign}>
                                            <img
                                                className="sign-form-icon"
                                                src="img/icon_login.svg"
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
                                    ) :
                                    (
                                        <form id="sign-up-form" onSubmit={this.handleSign}>
                                            <img
                                                className="sign-form-icon"
                                                src="img/icon_login.svg"
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
                                            <input
                                                type="text"
                                                name="company-name"
                                                id="company-name"
                                                placeholder={t("sign.up.companyNamePlaceholder")}
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
                                            <input
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                placeholder={t("sign.up.phonePlaceholder")}
                                                required
                                            />
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
                                            <label>
                                                {
                                                    t("sign.up.photoPlaceholder")
                                                }
                                                <input
                                                    type="file"
                                                    name="photo"
                                                    id="photo"
                                                    title={t("sign.up.photoPlaceholder")}
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
                            <div className="sign-in-with-socials">
                                <button className="fb"><img src="../img/facebook.png"/></button>
                                <button className="tw"><img src="../img/twitter.png"/></button>
                            </div>
                            <button
                                className="switch-link"
                                onClick={this.switcher}
                            >
                                {
                                    t(this.state.type === "in" ?
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