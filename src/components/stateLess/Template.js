import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {I18n} from 'react-i18next';

class Template extends Component {
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <section className="template">
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
    templateComment: PropTypes.string.isRequired
};

export default Template;