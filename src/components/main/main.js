import React, {Component} from 'react';
import { I18n, Trans } from 'react-i18next';
import {VerificationType} from "./verificationType";

export class Main extends Component {

    render() {
        if (this.props.active === true) {
            return (
                <I18n>
                    {
                        (t, {i18n}) => (
                            <main>
                                <button className="new-task">{t("main.newTaskBtn")}</button>
                                <div className="main-container">
                                    <VerificationType
                                        name={t("main.verificationTypes.selfie")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.selfie")}
                                        city="Москва"
                                    />
                                    <VerificationType
                                        name={t("main.verificationTypes.business")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.business")}
                                        city="Москва"
                                    />
                                    <VerificationType
                                        name={t("main.verificationTypes.yourself")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.yourself")}
                                        city="Москва"
                                    />
                                    <VerificationType
                                        name={t("main.verificationTypes.event")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.event")}
                                        city="Москва"
                                    />
                                </div>
                            </main>
                        )
                    }
                </I18n>
            );
        } else {
            return (
                <I18n>
                    {
                        (t, {i18n}) => (
                            <main>
                                <button className="new-task">{t("main.newTaskBtn")}</button>
                                <div className="main-container">
                                    <VerificationType
                                        name={t("main.verificationTypes.selfie")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.selfie")}
                                        city="Москва"
                                    />
                                    <VerificationType
                                        name={t("main.verificationTypes.business")}
                                        active={t("main.verificationState")}
                                        desc={t("main.verificationDesc.business")}
                                        city="Москва"
                                    />
                                </div>
                            </main>
                        )
                    }
                </I18n>
            );
        }
    }
}