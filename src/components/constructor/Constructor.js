import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import Footer from './Footer';
import {RequiredFields} from "./RequiredFields";
import {connect} from 'react-redux';
import CustomFieldset from "./inputTypes/CustomFieldSet";

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
        this.onSubmitConstructor = this.onSubmitConstructor.bind(this);
        this.constructorPreview = this.constructorPreview.bind(this);
        this.saveConstructorAsTemplate = this.saveConstructorAsTemplate.bind(this);
    }

    removeEvent(id) {
        let newFieldSet = this.state.customFields;
        newFieldSet.splice(id - 1, 1);
        this.setCustomFields(newFieldSet);
    }

    setCustomFields(fields) {
        this.setState({
            customFields: fields
        });
    }

    onSubmitConstructor() {
        let form = document.forms[0];

        for (let i = 0; i < form.length; i++) {
            alert(form[i].id);
        }
    }

    constructorPreview(e) {
        e.preventDefault();
    }

    saveConstructorAsTemplate(e) {
        e.preventDefault();
    }

    render() {
        console.log(this.state.customFields);
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
                                    constructorPreview={(e) => this.constructorPreview(e)}
                                    saveConstructorAsTemplate={(e) => this.saveConstructorAsTemplate(e)}
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
        renderAppFilter: state.renderAppReducer,
        inputsList: state.addInput
    }
};

export default connect(mapStateToProps)(Constructor)