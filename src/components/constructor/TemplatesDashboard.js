import React, {Component} from 'react';
import * as $ from 'jquery';
import {I18n} from 'react-i18next';
import Template from '../stateLess/Template';
import {apiHost} from "../../App";


class TemplatesDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            templates: []
        };
    }

    componentDidMount() {
        let token = document.cookie.replace("token=", ""),
            apiUrl = apiHost + "verifier/api/v1/template/list",
            settings = {
                async: true,
                crossDomain: true,
                method: "GET",
                url: apiUrl,
                headers: {
                    "Token": token
                }
            };

        $.ajax(settings).done((response) => {
            this.setState({
                templates: response.data
            });
        });
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="templates-dashboard">
                                <div className="template-buttons">
                                    <h1>{t("templates.caption")}</h1>
                                    <button
                                        type="button"
                                        className="from-temp-to-dash"
                                        onClick={
                                            () => {
                                                window.location.pathname = "/dashboard";
                                            }
                                        }
                                    >
                                        {t("profile.backToMain")}
                                    </button>
                                    <button
                                        type="button"
                                        className="from-temp-to-const"
                                        onClick={
                                            () => {
                                                window.location.pathname = "/constructor";
                                            }
                                        }
                                    >
                                        {t("newTask.constCaption")}
                                    </button>
                                </div>
                                <div className="templates-container">
                                    {/*{*/}
                                        {/*this.state.templates.map((template) => (*/}
                                            {/*<Template*/}
                                                {/*templateName={template.templateName}*/}
                                                {/*templateComment={template.templateComment}*/}
                                            {/*/>*/}
                                        {/*))*/}
                                    {/*}*/}
                                    <Template
                                        templateName={'Template name'}
                                        templateComment={'This is a template comment. Maybe. I am not sure. I hope this is.'}
                                    />
                                    <Template
                                        templateName={'Template name'}
                                        templateComment={'This is a template comment. Maybe. I am not sure. I hope this is.'}
                                    />
                                    <Template
                                        templateName={'Template name'}
                                        templateComment={'This is a template comment. Maybe. I am not sure. I hope this is.'}
                                    />
                                    <Template
                                        templateName={'Template name'}
                                        templateComment={'This is a template comment. Maybe. I am not sure. I hope this is.'}
                                    />
                                </div>
                            </section>
                        </main>
                    )
                }
            </I18n>
        )
    }
}

export default TemplatesDashboard