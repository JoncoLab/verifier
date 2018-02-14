import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from 'react-classset';
import TypeSelect from './TypeSelect';
import {connect} from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.appendField = this.appendField.bind(this);
    }
    appendField() {
        this.props.appendField(this.props.inputProps);
    }
    render() {
        const textSelectClass = classSet({
            'type-select': true,
            'active': this.props.inputProps === "TEXT_TYPE"
        });
        const imageSelectClass = classSet({
            'type-select': true,
            'active': this.props.inputProps === "IMAGE_TYPE"
        });
        const videoSelectClass = classSet({
            'type-select': true,
            'active': this.props.inputProps === "VIDEO_TYPE"
        });
        return (
            <I18n>
                {
                    (t) => (
                        <div className="footer">
                            <div className="footer-text">
                                <h2>{t("newTask.taskFooter.caption")}</h2>
                                <span className="current-type">
                                    {t("newTask.taskFooter.type")}
                                    <span>{t("newTask.taskFooter.types." + this.props.inputProps)}</span>
                                </span>
                            </div>
                            <div className="available-types">
                                <TypeSelect
                                    text="•"
                                    local={false}
                                    btnClass={textSelectClass}
                                    inputType="TEXT_TYPE"
                                />
                                <TypeSelect
                                    text="♦"
                                    local={false}
                                    btnClass={imageSelectClass}
                                    inputType="IMAGE_TYPE"
                                />
                                <TypeSelect
                                    text="♣"
                                    local={false}
                                    btnClass={videoSelectClass}
                                    inputType="VIDEO_TYPE"
                                />
                            </div>
                            <button
                                form="none"
                                type="button"
                                className="add-input"
                                onClick={this.appendField}
                            >{t("newTask.taskFooter.addInput")}</button>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputProps: state.typeSelect.inputType
    }
};

export default connect(mapStateToProps)(Footer)

