import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import Footer from './Footer';
import {RequiredFields} from "./RequiredFields";
import {connect} from 'react-redux';
import CustomFieldset from "./inputTypes/CustomFieldSet";
import * as $ from "jquery";

class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: '',
            customFields: [
                {
                    id: 1,
                    type: "IMAGE_TYPE"
                },
                {
                    id: 2,
                    type: "TEXT_TYPE"
                },
                {
                    id: 3,
                    type: "VIDEO_TYPE"
                }
            ]
        };

        this.setCustomFields = this.setCustomFields.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        Constructor.constructorPreview = Constructor.constructorPreview.bind(this);
        Constructor.saveConstructorAsTemplate = Constructor.saveConstructorAsTemplate.bind(this);
    }

    removeEvent(id) {
        let newFieldSet = this.state.customFields;
        newFieldSet.splice(id - 2, 1);
        this.setCustomFields(newFieldSet);
    }

    setCustomFields(fields) {
        this.setState({
            customFields: fields
        });
    }
    sendRequest(apiUrl, data) {
        let token = document.cookie.replace("token=", ""),
            herokuAppUrl = "https://cors-anywhere.herokuapp.com/",
            settings = {
                url: herokuAppUrl + apiUrl,
                method: "POST",
                crossDomain: true,
                async: true,
                processData: false,
                data: data,
                headers: {
                    "Content-Type": "application/json",
                    "Token": token
                }
            };

        $.ajax(settings).done(() => {
            window.location.pathname = "/dashboard";
        })
    }
    onSubmitConstructor() {
        let val = (id) => {
            return document.getElementById(id).value;
        },
            verifTimeFrom = new Date(
                val("date") +
                "T" +
                val("from")
            ).getTime() / 1000 | 0,
            verifTimeTo = new Date(
                val("date") +
                "T" +
                val("to")
            ).getTime() / 1000 | 0,
            orderFields = [],
            fields = this.state.customFields;
        for (let i = 0; i < fields.length; i++) {
            let id = fields[i].id;
            switch (fields[i].type) {
                case "TEXT_TYPE":
                    orderFields.push({
                        fieldType: "txt",
                        fieldName: val("text-name-" + id),
                        fieldDescription: val("text-desc-" + id),
                        fieldData: "",
                        fieldMinCount: ""
                    });
                    break;
                case "IMAGE_TYPE":
                    orderFields.push({
                        fieldType: "image",
                        fieldName: val("image-name-" + id),
                        fieldDescription: val("image-desc-" + id),
                        fieldData: "",
                        fieldMinCount: val("image-files-" + id)
                    });
                    break;
                case "VIDEO_TYPE":
                    orderFields.push({
                        fieldType: "video",
                        fieldName: val("video-name-" + id),
                        fieldDescription: val("video-desc-" + id),
                        fieldData: "",
                        fieldMinCount: ""
                    });
                    break;
                default:
                    orderFields.push({
                        fieldType: "",
                        fieldName: "",
                        fieldDescription: "",
                        fieldData: "",
                        fieldMinCount: ""
                    });

            }
        }

        this.sendRequest(
            "http://185.4.75.58:8181/verifier/api/v1/order/add",
            JSON.stringify({
                orderName: val("task-name"),
                orderRate: val("price"),
                orderComment: val("comment"),
                verifAddr: val("address"),
                verifTimeFrom: verifTimeFrom,
                verifTimeTo: verifTimeTo,
                orderFields: orderFields
            })
        );
    }

    static constructorPreview(e) {
        e.preventDefault();

        // Тут треба викликати попап із Settings по формдаті
    }

    static saveConstructorAsTemplate(e) {
        e.preventDefault();

        // Тут треба формдату передавати на рест і зберігати, як шаблон
    }

    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <form
                                className="constructor"
                                name="constructor"
                                id="constructor"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    this.onSubmitConstructor();
                                }}
                            >
                                <div className="constructor-top">
                                    <h2>{t("newTask.constCaption")}</h2>
                                    <button
                                        form="none"
                                        type="button"
                                        className="back-to-main"
                                        onClick={() => {
                                            window.location.pathname = "/dashboard"
                                        }}
                                    >{t("newTask.backToMain")}</button>
                                </div>
                                <section className="constructor-form">
                                    <div className="task-caption">
                                        <h3>{t("newTask.taskName")}</h3>
                                        <button
                                            form="none"
                                            type="button"
                                            className="task-title"
                                        >♥</button>
                                        <input
                                            type="text"
                                            id="task-name"
                                            name="task-name"
                                            placeholder={t("newTask.namePlaceholder")}
                                        />
                                    </div>
                                    <div className="custom-fields">
                                        {this.state.customFields.map((field) => (
                                            <CustomFieldset
                                                remove={this.removeEvent}
                                                key={field.id}
                                                {...field}
                                            />
                                        ))}
                                    </div>
                                    <Footer
                                        components={this.state.customFields}
                                        setCustomFields={this.setCustomFields}
                                    />
                                </section>
                                <RequiredFields
                                    constructorPreview={(e) => Constructor.constructorPreview(e)}
                                    saveConstructorAsTemplate={(e) => Constructor.saveConstructorAsTemplate(e)}
                                />
                            </form>
                        </main>
                    )
                }
            </I18n>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        renderAppFilter: state.renderAppReducer
    }
};

export default connect(mapStateToProps)(Constructor)