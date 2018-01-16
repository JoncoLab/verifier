import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import TypeSelect from '../TypeSelect';

class CustomFieldSet extends Component {
    textField = <I18n>
        {
            (t) => (
                <div id={"custom-field-" + this.props.id} className="text-input">
                    <div className="input-caption">
                        <div className="input-info">
                            <h2>{t("newTask.newInput.taskName")}</h2>
                            <button
                                form="none"
                                type="button"
                                className="remove-btn"
                                onClick={this.remove}
                            >♠ {t("newTask.newInput.removeField")}</button>
                        </div>
                        <div className="input-types">
                            <span className="type">{t("newTask.newInput.fieldType")} <span>{t("newTask.newInput.typeText")}</span></span>
                            <button type="button" form="none" className="task-title">♥</button>
                            <div className="available-types">
                                <TypeSelect
                                    btnClass="input-type active"
                                    text="•"
                                    local={true}
                                    onClick={() => this.changeType("TEXT_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type"
                                    text="♦"
                                    local={true}
                                    onClick={() => this.changeType("IMAGE_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type"
                                    text="♣"
                                    local={true}
                                    onClick={() => this.changeType("VIDEO_TYPE")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            name={"text-name-" + this.props.id}
                            id={"text-name-" + this.props.id}
                            placeholder={t("newTask.namePlaceholder")}
                            required={true}
                        />
                        <input
                            type="text"
                            name={"text-desc-" + this.props.id}
                            id={"text-desc-" + this.props.id}
                            placeholder={t("newTask.newInput.descPlaceholder")}
                            required={true}
                        />
                    </div>
                </div>
            )
        }
    </I18n>;
    imageField = <I18n>
        {
            (t) => (
                <div id={"custom-field-" + this.props.id} className="image-input">
                    <div className="input-caption">
                        <div className="input-info">
                            <h2>{t("newTask.newInput.taskName")}</h2>
                            <button
                                form="none"
                                type="button"
                                className="remove-btn"
                                onClick={this.remove}
                            >♠ {t("newTask.newInput.removeField")}</button>
                        </div>
                        <div className="input-types">
                            <span className="type">{t("newTask.newInput.fieldType")} <span>{t("newTask.newInput.typePhoto")}</span></span>
                            <button type="button" form="none" className="task-title">♥</button>
                            <div className="available-types">
                                <TypeSelect
                                    btnClass="input-type"
                                    text="•"
                                    local={true}
                                    onClick={() => this.changeType("TEXT_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type active"
                                    text="♦"
                                    local={true}
                                    onClick={() => this.changeType("IMAGE_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type"
                                    text="♣"
                                    local={true}
                                    onClick={() => this.changeType("VIDEO_TYPE")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            name={"image-name-" + this.props.id}
                            id={"image-name-" + this.props.id}
                            placeholder={t("newTask.newInput.fioPlaceholder")}
                            required={true}
                        />
                        <input
                            type="text"
                            name={"image-desc-" + this.props.id}
                            id={"image-desc-" + this.props.id}
                            placeholder={t("newTask.newInput.visitPlaceholder")}
                            required={true}
                        />
                        <input
                            type="number"
                            name={"image-files-" + this.props.id}
                            id={"image-files-" + this.props.id}
                            placeholder={t("newTask.newInput.filePlaceholder")}
                            required={true}
                        />
                    </div>
                </div>
            )
        }
    </I18n>;
    videoField = <I18n>
        {
            (t) => (
                <div id={"custom-field-" + this.props.id} className="video-input">
                    <div className="input-caption">
                        <div className="input-info">
                            <h2>{t("newTask.newInput.taskName")}</h2>
                            <button
                                form="none"
                                type="button"
                                className="remove-btn"
                                onClick={this.remove}
                            >♠ {t("newTask.newInput.removeField")}</button>
                        </div>
                        <div className="input-types">
                            <span className="type">{t("newTask.newInput.fieldType")} <span>{t("newTask.newInput.typeVideo")}</span></span>
                            <button type="button" form="none" className="task-title">♥</button>
                            <div className="available-types">
                                <TypeSelect
                                    btnClass="input-type"
                                    text="•"
                                    local={true}
                                    onClick={() => this.changeType("TEXT_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type"
                                    text="♦"
                                    local={true}
                                    onClick={() => this.changeType("IMAGE_TYPE")}
                                />
                                <TypeSelect
                                    btnClass="input-type active"
                                    text="♣"
                                    local={true}
                                    onClick={() => this.changeType("VIDEO_TYPE")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="input-fields">
                        <input
                            type="text"
                            name={"video-name-" + this.props.id}
                            id={"video-name-" + this.props.id}
                            placeholder={t("newTask.namePlaceholder")}
                            required={true}
                        />
                        <input
                            type="text"
                            name={"video-desc-" + this.props.id}
                            id={"video-desc-" + this.props.id}
                            placeholder={t("newTask.newInput.descPlaceholder")}
                            required={true}
                        />
                    </div>
                </div>
            )
        }
    </I18n>;
    constructor(props) {
        super(props);

        this.state = {
            type: props.type
        };

        this.changeType = this.changeType.bind(this);
        this.remove = this.remove.bind(this);
    }
    changeType(type) {
        this.setState({
            type: type
        });
    }
    remove() {
        this.props.remove(this.props.id);
    }
    renderField(type) {
        let targetField;
        switch (type) {
            case "TEXT_TYPE":
                targetField = this.textField;
                break;
            case "IMAGE_TYPE":
                targetField = this.imageField;
                break;
            case "VIDEO_TYPE":
                targetField = this.videoField;
                break;
            default:
                targetField = null;
        }
        return targetField;
    }
    render() {
        return this.renderField(this.state.type);
    }
}

export default CustomFieldSet