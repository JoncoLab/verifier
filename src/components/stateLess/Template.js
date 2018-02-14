import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from 'react-i18next';

class Template extends Component {
    constructor(props) {
        super(props);

        this.editTemplate = this.editTemplate.bind(this);
    }
    editTemplate() {
        window.location.pathname = "/constructor?templateId=" + this.props.templateId;
    }
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <section
                            className="template"
                            onClick={this.editTemplate}
                        >
                            <h2 className="template-name">{this.props.templateName}</h2>
                            <span className="template-link">{t("templates.toTheConst")}</span>
                            <p className="template-desc">{this.props.templateComment}</p>
                        </section>
                    )
                }
            </I18n>
        )
    }
}

Template.propTypes = {
    templateName: PropTypes.string.isRequired,
    templateId: PropTypes.number.isRequired
};

export default Template;