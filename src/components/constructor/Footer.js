import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from 'react-classset';
import TypeSelect from './TypeSelect';
import {setTypeAction} from "./constStore/constActionCreators";
import {connect} from 'react-redux';

class Footer extends Component {
    constructor(props) {
        super(props);

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
                                    btnClass={textSelectClass}
                                    inputType="TEXT_TYPE"
                                />
                                <TypeSelect
                                    text="♦"
                                    btnClass={imageSelectClass}
                                    inputType="IMAGE_TYPE"
                                />
                                <TypeSelect
                                    text="♣"
                                    btnClass={videoSelectClass}
                                    inputType="VIDEO_TYPE"
                                />
                            </div>
                            <button
                                type="button"
                                className="add-input"
                                onClick={() => {
                                    this.props.selectedTypeEvent(this.props.inputProps)
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

const mapDispatchToProps = (dispatch) => {
    return ({
        selectedTypeEvent: (target) => {
            dispatch(setTypeAction(target))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

