import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import Footer from './Footer';
import {RequiredFields} from "./RequiredFields";
import {connect} from 'react-redux';
import CustomFieldset from "./inputTypes/CustomFieldSet";
import ConstructorPopUp from './ContructorPopUp';
import * as $ from "jquery";
import {apiHost} from "../../App";

class Constructor extends Component {
    constructor(props) {
        super(props);

        let pathname = window.location.pathname,
            leftOver = "/constructor%3FtemplateId=";

        this.state = {
            inputVal: '',
            customFields: [],
            constPopUp: false,
            isTemplate: pathname.includes(leftOver) ?
                pathname.replace(leftOver, "") :
                false,
            templateData: {},
        };

        this.setCustomFields = this.setCustomFields.bind(this);
        this.removeEvent = this.removeEvent.bind(this);
        this.saveConstructorAsTemplate = this.saveConstructorAsTemplate.bind(this);
        this.getTemplateData = this.getTemplateData.bind(this);
        this.togglePopUp = this.togglePopUp.bind(this);
        this.mountInput = this.mountInput.bind(this);
        this.getDefaultsForCustomTemplateInputs = this.getDefaultsForCustomTemplateInputs.bind(this);
        this.appendField = this.appendField.bind(this);
        this.changeCustomInputType = this.changeCustomInputType.bind(this);
        this.handleCustomFieldId = this.handleCustomFieldId.bind(this);
    }
    async getTemplateData() {
        if (this.state.isTemplate) {
            let templateId = this.state.isTemplate;
            if (templateId) {
                let apiUrl = apiHost + "verifier/api/v1/template/details/" + templateId,
                    token = document.cookie.replace("token=", ""),
                    settings = {
                        async: true,
                        crossDomain: true,
                        method: "GET",
                        url: apiUrl,
                        headers: {
                            "Token": token
                        },
                    };

                return $.ajax(settings)
            }
        }
    }
    async componentWillMount() {
        if (this.state.isTemplate) {
            try {
                let Template = await this.getTemplateData(),
                    data = Template.data;
                this.setState({
                    templateData: data,
                });
                this.parseTemplateFields(data.templateFields);
            } catch (e) {
                console.log(e);
            }
        }
    }
    parseTemplateFields(fields) {
        if (this.state.isTemplate && fields.length) {
            let targetCustomFields = [],
                getTargetType = (inType) => {
                    let targetType;
                    switch (inType) {
                        case "txt":
                            targetType = "TEXT_TYPE";
                            break;
                        case "photo":
                            targetType = "IMAGE_TYPE";
                            break;
                        case "video":
                            targetType = "VIDEO_TYPE";
                            break;
                        default:
                            targetType = "";
                    }
                    return targetType;
                };

            fields.forEach((field, index) => {
                let targetCustomTemplateField = {
                    id: index + 1,
                    type: getTargetType(field.fieldType)
                };
                targetCustomFields.push(targetCustomTemplateField);
            });

            this.setCustomFields(targetCustomFields);
        }
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    mountInput(props) {
        let inputShouldMount = Object.entries(this.state.templateData).length || !this.state.isTemplate,
            JSXElement = null, textArea = false;
        if (inputShouldMount) {
            const getTargetDefaultValue = (id) => {
                let data = this.state.templateData,
                    target;

                switch (id) {
                    case "task-name":
                        target = data.templateName;
                        break;
                    case "price":
                        target = data.templateRate;
                        break;
                    case "comment":
                        target = data.templateComment;
                        textArea = true;
                        break;
                    default:
                        target = "";
                }

                return {
                    defaultValue: target
                };
            };

            let newProps = Object.assign(props, getTargetDefaultValue(props.id));

            JSXElement = textArea ?
                <textarea {...newProps}/> :
                <input {...newProps}/>;
        }
        return JSXElement;
    }
    removeEvent(targetId) {
        let newFieldSet = this.state.customFields;
        newFieldSet = newFieldSet.filter(item => item !== null && item.id !== targetId);
        this.setCustomFields(newFieldSet);
    }
    setCustomFields(fields) {
        this.setState({
            customFields: fields
        });
    }
    handleCustomFieldId() {
        let customFields = this.state.customFields,
            idS = [],
            targetId = this.state.isTemplate ? 100 : 0;
        for (let field of customFields) {
            idS.push(field.id);
        }
        while (idS.includes(targetId)) {
            targetId++;
        }
        return targetId;
    }
    appendField(type) {
        let targetCustomFields = this.state.customFields,
            id = targetCustomFields.length,
            newField = {
                id: this.handleCustomFieldId(),
                type: type
            };

        targetCustomFields.push(newField);

        this.setCustomFields(targetCustomFields);
    }
    sendRequest(apiUrl, data) {
        let token = document.cookie.replace("token=", ""),
            settings = {
                url: apiUrl,
                method: "POST",
                crossDomain: true,
                async: true,
                processData: false,
                data: data,
                headers: {
                    "Token": token,
                    "Content-Type": "application/json"
                }
            };

        $.ajax(settings).done(() => {
            window.location.pathname = "/dashboard";
        })
    }
    getConstructorData() {
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
            fields = this.state.customFields,
            orderName = val("task-name"),
            orderRate = val("price"),
            orderComment = val("comment"),
            verifAddr = val("address");

        for (let i = 0; i < fields.length; i++) {
            if (fields[i] !== null && fields[i] !== undefined) {
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
                            fieldType: "photo",
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
            } else {
                orderFields.push({
                    fieldType: "",
                    fieldName: "",
                    fieldDescription: "",
                    fieldData: "",
                    fieldMinCount: ""
                });
            }
        }

        return {
            orderName: orderName,
            orderRate: orderRate,
            orderComment: orderComment,
            verifAddr: verifAddr,
            verifTimeFrom: verifTimeFrom,
            verifTimeTo: verifTimeTo,
            orderFields: orderFields
        }
    }
    onSubmitConstructor() {
        this.sendRequest(
            apiHost + "verifier/api/v1/order/add",
            JSON.stringify(this.getConstructorData())
        );
    }
    saveConstructorAsTemplate() {
        const setTemplate = () => {
            let fields = this.getConstructorData(),
                template = {
                    templateName: fields.orderName,
                    templateRate: fields.orderRate,
                    templateComment: fields.orderComment,
                    templateFields: []
                },
                customTemplateFields = fields.orderFields;

            for (let field of customTemplateFields) {
                let targetField;
                if (field.hasOwnProperty("fieldData")) {
                    let {fieldData, ...cleanField} = field;
                    targetField = cleanField;
                } else {
                    targetField = field
                }
                template.templateFields.push(targetField);
            }

            return JSON.stringify(template);
        };

        this.sendRequest(
            apiHost + "verifier/api/v1/template/add",
            setTemplate()
        );
    }
    getDefaultsForCustomTemplateInputs(index) {
        let fieldSet =
                this.state.isTemplate ?
                    this.state.templateData.templateFields ?
                        this.state.templateData.templateFields :
                        false :
                    false,
            targetField =
                this.state.isTemplate &&
                fieldSet ?
                    fieldSet[index] ?
                        fieldSet[index] :
                        {fieldType: null} :
                    {fieldType: null},
            type = targetField.fieldType,
            Defaults = {
                name: "",
                description: ""
            };

        if (type) {
            Defaults = {
                name: targetField.fieldName,
                description: targetField.fieldDescription
            };
            if (type === "photo") {
                Object.assign(Defaults, {
                    count: targetField.fieldMinCount
                });
            }
        }

        return Defaults;
    }
    changeCustomInputType(id, type) {
        try {
            let index = id - 1,
                fieldSet = this.state.customFields;

            fieldSet[index].type = type;
            console.log(fieldSet);
        } catch (e) {
            console.log(e);
        }
    }
    togglePopUp() {
        this.setState({
            constPopUp: !this.state.constPopUp
        });
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
                                    <div className="task-caption" id="context-task-caption">
                                        <h3>{t("newTask.taskName")}</h3>
                                        <button
                                            form="none"
                                            type="button"
                                            className="task-title"
                                        >♥</button>
                                        {
                                            this.mountInput({
                                                type: "text",
                                                id: "task-name",
                                                name: "task-name",
                                                placeholder: t("newTask.namePlaceholder")
                                            })
                                        }
                                    </div>
                                    <div className="custom-fields">
                                        {this.state.isTemplate &&
                                            this.state.templateData.templateFields ?
                                                    this.state.customFields.map((field) => (
                                                        <CustomFieldset
                                                            mount={this.mountInput}
                                                            remove={this.removeEvent}
                                                            getDefaults={() => this.getDefaultsForCustomTemplateInputs(parseInt(field.id) - 1)}
                                                            changeType={this.changeCustomInputType}
                                                            key={field.id.toString()}
                                                            {...field}
                                                        />
                                                    )) : ""
                                        }
                                    </div>
                                    <Footer appendField={this.appendField}/>
                                </section>
                                <RequiredFields
                                    mount={this.mountInput}
                                    onToggle={this.togglePopUp}
                                    saveConstructorAsTemplate={(e) => this.saveConstructorAsTemplate(e)}
                                />
                                <ConstructorPopUp
                                    getOrderData={() => this.getConstructorData()}
                                    constPopUp={this.state.constPopUp}
                                    onToggle={this.togglePopUp}
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