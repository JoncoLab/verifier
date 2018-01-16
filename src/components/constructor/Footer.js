import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import classSet from 'react-classset';
import TypeSelect from './TypeSelect';
import TextInput from './inputTypes/TextInput';
import ImageInput from './inputTypes/ImageInput';
import VideoInput from './inputTypes/VideoInput';
import {inputAction, typesAction} from "./constStore/constActionCreators";
import {connect} from 'react-redux';

class Footer extends Component {
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
                                    this.props.addInputEvent(this.props.inputProps)
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
        addInputEvent: (target) => {
            let targetField;
            switch(target) {
                case "TEXT_TYPE":
                    targetField = <TextInput/>;
                    break;
                case "IMAGE_TYPE":
                    targetField = <ImageInput/>;
                    break;
                case "VIDEO_TYPE":
                    targetField = <VideoInput/>;
                    break;
                default:
                    targetField = null;
                    break;
            }
            dispatch(inputAction(targetField))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

