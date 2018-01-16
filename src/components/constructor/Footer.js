import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from 'react-classset';
import TypeSelect from './TypeSelect';
import {connect} from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.components = props.components;

        this.state = {
            id: this.components.length + 1
        };
    }
    appendField(id) {
        this.components.push({
            id: id,
            type: this.props.inputProps
        });
        this.props.setCustomFields(this.components);
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
                                <h2>ДОБАВИТЬ ПОЛЕ</h2>
                                <span className="current-type">{t("newTask.taskFooter.type")}<span>photo</span></span>
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
                                type="button"
                                className="add-input"
                                onClick={() => {
                                    this.setState({
                                        id: this.state.id + 1
                                    });
                                    this.appendField(this.state.id);
                                }}
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

