import React, {Component} from 'react';
import * as $ from 'jquery';
import {I18n} from 'react-i18next';
import Template from '../stateLess/Template';


class TemplatesDashboard extends Component {
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
                                >
                                    {t("newTask.constCaption")}
                                </button>
                                <div className="templates-container">
                                    {
                                        this.state.templates.map()
                                    }
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