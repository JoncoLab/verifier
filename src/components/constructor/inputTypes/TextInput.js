import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import TypeSelect from '../TypeSelect';

class TextInput extends Component {

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <div id={3} className="text-input">
                            <div className="input-caption">
                                <div className="input-info">
                                    <h2>{t("newTask.newInput.taskName")}</h2>
                                    <button type="button" className="remove-btn">♠ {t("newTask.newInput.removeField")}</button>
                                </div>
                                <div className="input-types">
                                    <span className="type">{t("newTask.newInput.fieldType")} <span>{t("newTask.newInput.typeText")}</span></span>
                                    <button type="button" className="task-title">♥</button>
                                    <div className="available-types">
                                        <TypeSelect btnClass="input-type active" text="•"/>
                                        <TypeSelect btnClass="input-type" text="♦"/>
                                        <TypeSelect btnClass="input-type" text="♣"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-fields">
                                <input
                                    type="text"
                                    name="input-text-name"
                                    id="text-name"
                                    placeholder={t("newTask.namePlaceholder")}/>
                                <input
                                    type="text"
                                    name="input-text-description"
                                    id="text-desc"
                                    placeholder={t("newTask.newInput.descPlaceholder")}/>
                            </div>
                        </div>
                    )
                }
            </I18n>
        )
    }
}

export default TextInput