import React, {Component} from "react";
import { I18n } from "react-i18next";
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
    static loadPhoto() {
        let input = document.getElementById("photo"),
            preview = document.getElementById("profile-photo"),
            defaultImage = "img/icon_login.svg";
        if (input.files.length > 0) {
            let reader = new FileReader(),
                image = input.files[0];
            reader.readAsText(image);
            reader.onloadend = () => {
                preview.src = reader.result;
                input.decoded = reader.result;
            }
        } else {
            preview.src = defaultImage;
            input.decoded = defaultImage;
        }
    }
    static getVal(id) {
        let element = document.getElementById(id);
        if (element.decoded !== undefined) alert(element.decoded);
        return element.value;
    }
    showError(err) {
        this.setState({
            error: err
        });
    }
    sendRequest(settings) {
        $.ajax(settings)
            .then((response) => {
                if (response.status === 200) {
                    Sign.proceedToCabinet();
                } else {
                    alert("An error " + response.status + " occurred - " + response.statusText);
                }
            }, (response) => {
                /**
                 * @property responseJSON
                 */
                let error = response.responseJSON;
                if (error === undefined) {
                    alert("Error " + response.status + " - " + response.statusText);
                } else {
                    alert("Error " + error.code + " in method \"" + error.method + "\"" + " - " + error.error);
                }
            });
    }
    switcher() {
        this.setState({
            type: this.state.type === "in" ? "up" : "in"
        });
        this.showError(null);
    }
    signInUser() {
        let fields = JSON.stringify({
                email: Sign.getVal("sign-in-email"),
                password: Sign.getVal("sign-in-password")
            }),
            settings = {
                async: true,
                crossDomain: true,
                url: "http://185.4.75.58:8181/verifier/api/v1/user/customer/login",
                method: "POST",
                processData: false,
                data: fields,
                headers: {
                    "Content-Type": "application/json"
                }
        };

        this.sendRequest(settings);
    }
    signUpUser() {
        let pass = Sign.getVal("sign-up-password"),
            conf = Sign.getVal("sign-up-password-confirm"),
            url = "http://185.4.75.58:8181/verifier/api/v1/user/customer/registration";

        if (pass !== conf) {
            this.showError("passwordsDoNotMatch");
        } else {
            let fields = new FormData();
            fields.append("photo", Sign.getVal("photo"));
            fields.append("email", Sign.getVal("sign-up-email"));
            fields.append("password", pass);
            fields.append("phone", Sign.getVal("phone"));
            fields.append("firstName", Sign.getVal("first-name"));
            fields.append("lastName", Sign.getVal("second-name"));
            fields.append("birthDate", Sign.getVal("birth-date"));
            fields.append("type", "USER");
            fields.append("companyName", Sign.getVal("company-name"));

            let settings = {
                url: url,
                data: fields,
                processData: false,
                method: "POST",
                async: true,
                crossDomain: true,
                contentType: false,
                mimeType: "multipart/form-data",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            this.sendRequest(settings);
        }
    }
    handleSign(e) {
        e.preventDefault();
        this.showError(null);
        this.state.type === "in" ?
            this.signInUser() :
            this.signUpUser();
    }
    static proceedToCabinet() {
        // proceedToCabinet
        alert("Successfully proceeded to cabinet (imaginary)!");
    }
    render() {
        return (
            <I18n ns="translations">
                {
                    (t) => (
                        <section className="sign">
                            {
                                this.state.type === "in" ?
                                    (
                                        <form name="sign-in-form" id="sign-in-form" onSubmit={this.handleSign}>
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
                                    ) :
                                    (
                                        <form name="sign-up-form" id="sign-up-form" onSubmit={this.handleSign} encType="multipart/form-data">
                                            <img
                                                className="sign-form-icon"
                                                id="profile-photo"
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