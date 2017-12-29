import React, {Component} from "react";
import { I18n, Trans } from "react-i18next";


export class Sign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "in"
        };

        this.switcher = this.switcher.bind(this);
    }
    switcher() {
        this.setState({
            type: this.state.type === "in" ? "up" : "in"
        });
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
                                        <form id="sign-in-form">
                                            <img
                                                className="sign-form-icon"
                                                src="img/icon_login.svg"
                                                alt="Sign form icon"
                                            />
                                            <h2 className="form-caption">{t("yaEbu")}</h2>
                                            <input
                                                type="email"
                                                name="sign-in-email"
                                                id="sign-in-email"
                                                placeholder={t("sign.in.emailPlaceholder")}
                                            />
                                            <input
                                                type="password"
                                                name="sign-in-password"
                                                id="sign-in-password"
                                                placeholder={t("sign.in.passPlaceholder")}
                                            />
                                            <input
                                                type="submit"
                                                name="sign-in-submit"
                                                id="sign-in-submit"
                                            />
                                            <label htmlFor="sign-in-submit">{t("sign.in.submitText")}</label>
                                        </form>
                                    ) :
                                    (
                                        <form id="sign-up-form">
                                            <img
                                                className="sign-form-icon"
                                                src="img/icon_login.svg"
                                                alt="Sign form icon"
                                            />
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder={t("sign.up.namePlaceholder")}
                                            />
                                            <input
                                                type="email"
                                                name="sign-up-email"
                                                id="sign-up-email"
                                                placeholder={t("sign.up.emailPlaceholder")}
                                            />
                                            <input
                                                type="password"
                                                name="sign-up-password"
                                                id="sign-up-password"
                                                placeholder={t("sign.up.passPlaceholder")}
                                            />
                                            <input
                                                type="password"
                                                name="sign-up-password-confirm"
                                                id="sign-up-password-confirm"
                                                placeholder={t("sign.up.confirmPassPlaceholder")}
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
                            <div className="sign-in-with-socials">
                                <button className="fb"/>
                                <button className="tw"/>
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