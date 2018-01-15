import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import VerificationType from "../stateLess/VerificationType";
import {setRenderFilter, RenderFilters} from "../../store/actions";
import {connect} from 'react-redux';
import * as $ from "jquery";

class Dashboard extends Component {
    render() {
        let settings = {
            async: true,
            crossDomain: true,
            processData: false,
            contentType: false,
            url: "http://185.4.75.58:8181/verifier/api/v1/user/customer/0",
            method: "GET",
            headers: {
                "Token": "A7FF44114D95EB835D4944B2B7D3D6B6A642E0AFF71C0CD99CEEC53A36C61B58"
            }
        };

        $.ajax(settings).then(() => {
            alert("YEAH!");
        }, () => {
            alert("Nooooooo!");
        });
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="create-task-container">
                                <button className="new-task"
                                        onClick={
                                            () => {
                                                window.location.pathname = "/constructor";
                                            }
                                        }
                                >
                                    {t("main.newTaskBtn")}
                                </button>
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

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fromDashToCont: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_CONSTRUCTOR))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)