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
                            <h2 className="verification-name">{this.props.templateName}</h2>
                            <span className="verification-state">{t("templates.toTheConst")}</span>
                            <p className="verification-desc">{this.props.templateComment}</p>
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