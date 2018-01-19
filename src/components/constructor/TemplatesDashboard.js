import React, {Component} from 'react';
import * as $ from 'jquery';
import {I18n} from 'react-i18next';
import Template from '../stateLess/Template';


class TemplatesDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            templates: []
        };
    }

    componentDidMount() {
        let token = document.cookie.replace("token=", ""),
            herokuAppUrl = "https://cors-anywhere.herokuapp.com/",
            apiUrl = "http://185.4.75.58:8181/verifier/api/v1/template/list",
            settings = {
                async: true,
                crossDomain: true,
                method: "GET",
                url: herokuAppUrl + apiUrl,
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