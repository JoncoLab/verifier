import React, {Component} from 'react';
import {I18n, Trans} from 'react-i18next';
import {VerificationType} from "./VerificationType";

class Dashboard extends Component {

    render() {
        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <main>
                            <section className="create-task-container">
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
                            </section>
                        </main>
                    )
                }
            </I18n>
        );
    }
}

export default Dashboard;