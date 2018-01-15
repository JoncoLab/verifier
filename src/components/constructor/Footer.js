import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import TypeSelect from './TypeSelect';
import {typesAction} from "./constStore/constActionCreators";
import {TypesList} from "./constStore/constActions";
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        console.log(this.props.inputType);
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
                                    btnClass="type-select"
                                    onClick={() => {
                                        if(this.props.inputType !== 'TEXT_TYPE') this.props.typeText();
                                        console.log(this.props.inputType);
                                    }}
                                />
                                <TypeSelect
                                    text="♦"
                                    btnClass="type-select"
                                    onClick={() => {
                                        if(this.props.inputType !== 'IMAGE_TYPE') this.props.typeImage();
                                        console.log(this.props.inputType);
                                    }}
                                />
                                <TypeSelect
                                    text="♣"
                                    btnClass="type-select"
                                    onClick={() => {
                                        if(this.props.inputType !== 'VIDEO_TYPE') this.props.typeVideo();
                                        console.log(this.props.inputType);
                                    }}
                                />
                            </div>
                            <button className="add-input">{t("newTask.taskFooter.addInput")}</button>
                        </div>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputType: state.typeSelect.inputType
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        typeText: () => {
            dispatch(typesAction(TypesList.TEXT_TYPE))
        },

        typeImage: () => {
            dispatch(typesAction(TypesList.IMAGE_TYPE))
        },

        typeVideo: () => {
            dispatch(typesAction(TypesList.VIDEO_TYPE))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

