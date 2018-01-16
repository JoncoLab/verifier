import React, {Component} from "react";
import {I18n} from 'react-i18next';


export class RequiredFields extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: 10
        }
    }
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <section className="constructor-required">
                            <h2 className="caption">{t("newTask.taskRequiredFields.caption")}</h2>
                            <div className="required-fields">
                                <div className="field-set names">
                                    <input
                                        id="f"
                                        name="f"
                                        type="checkbox"
                                    />
                                    <label htmlFor="f">
                                        <span className="ico"/>
                                        {t("newTask.taskRequiredFields.f")}
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        placeholder={t("newTask.taskRequiredFields.firstName")}
                                    />
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        placeholder={t("newTask.taskRequiredFields.lastName")}
                                    />
                                    <input
                                        type="text"
                                        name="second-name"
                                        id="second-name"
                                        placeholder={t("newTask.taskRequiredFields.secondName")}
                                    />
                                </div>
                                <div className="field-set date">
                                    <label htmlFor="date">{t("newTask.taskRequiredFields.date")}</label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                    />
                                    <label htmlFor="time">{t("newTask.taskRequiredFields.from")}</label>
                                    <input
                                        type="time"
                                        name="from"
                                        id="from"
                                    />
                                    <label htmlFor="to">{t("newTask.taskRequiredFields.to")}</label>
                                    <input
                                        type="time"
                                        name="to"
                                        id="to"
                                    />
                                </div>
                                <div className="field-set address">
                                    <label htmlFor="address">{t("newTask.taskRequiredFields.address")}</label>
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder={t("newTask.taskRequiredFields.addressPlaceholder")}
                                    />
                                </div>
                                <div className="field-set price">
                                    <label htmlFor="price">
                                        {t("newTask.taskRequiredFields.price")}
                                        <span className="value">{this.state.price + "$"}</span>
                                    </label>
                                    <input
                                        type="range"
                                        name="price"
                                        id="price"
                                        placeholder="pricePlaceholder"
                                        min="10"
                                        max="1000"
                                        step="1"
                                        onChange={() => {
                                            let value = document.getElementById("price").value;
                                            this.setState({
                                                price: value
                                            });
                                        }}
                                    />
                                </div>
                                <div className="field-set comment">
                                    <textarea
                                        name="comment"
                                        id="comment"
                                        rows="5"
                                        placeholder={t("newTask.taskRequiredFields.comment")}
                                    >
                                    </textarea>
                                </div>
                                <div className="field-set buttons">
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                    }}>
                                        {t("newTask.taskRequiredFields.preview")}
                                    </button>
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                    }}>
                                        {t("newTask.taskRequiredFields.save")}
                                    </button>
                                </div>
                            </div>
                            <input
                                type="submit"
                                name="constructor-submit"
                                id="constructor-submit"
                                form="required-fields"
                            />
                            <label htmlFor="constructor-submit">{t("newTask.submit")}</label>
                        </section>
                    )
                }
            </I18n>
        );
    }
}