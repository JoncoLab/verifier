import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import TypeSelect from '../TypeSelect';

class ImageInput extends Component {
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div className="image-input">
                            <div className="input-caption">
                                <div className="input-info">
                                    <h2>{t("newTask.newInput.taskName")}</h2>
                                    <button type="button" className="remove-btn">♠ {t("newTask.newInput.removeField")}</button>
                                </div>
                                <div className="input-types">
                                    <span className="type">{t("newTask.newInput.fieldType")} <span>{t("newTask.newInput.typePhoto")}</span></span>
                                    <button type="button" className="task-title">♥</button>
                                    <div className="available-types">
                                        <TypeSelect btnClass="input-type" text="•"/>
                                        <TypeSelect btnClass="input-type active" text="♦"/>
                                        <TypeSelect btnClass="input-type" text="♣"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-fields">
                                <input
                                    type="text"
                                    name="input-image-name"
                                    id="image-name"
                                    placeholder={t("newTask.newInput.fioPlaceholder")}/>
                                <input
                                    type="text"
                                    name="input-visit-card-image"
                                    id="image-desc"
                                    placeholder={t("newTask.newInput.visitPlaceholder")}/>
                                <input
                                    type="number"
                                    id="image-files"
                                    placeholder={t("newTask.newInput.filePlaceholder")}/>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}

export default ImageInput