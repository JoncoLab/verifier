import React, {Component} from 'react';
import {I18n, Trans} from 'react-i18next';
import {VerificationType} from "./VerificationType";
import {setRenderFilter, RenderFilters} from "../../store/actions";
import {connect} from 'react-redux';

class Dashboard extends Component {

    render() {
        return (
            <I18n>
                {
                    (t, {i18n}) => (
                        <section className="create-task-container">
                            <button className="new-task"
                                    onClick={() => {
                                        if(this.props.renderAppFilter !== 'RENDER_CONSTRUCTOR') this.props.fromDashToCont()
                                    }}
                            >{t("main.newTaskBtn")}</button>
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