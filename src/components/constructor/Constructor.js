import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import Footer from './Footer';
import {RequiredFields} from "./RequiredFields";
import {RenderFilters, setRenderFilter} from "../../store/actions";
import {connect} from 'react-redux';

class Constructor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputVal: event.target.value
        });
    }

    render() {
        console.log(this.props.inputsList);
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <form className="constructor" onSubmit={(e) => e.preventDefault()}>
                                <div className="constructor-top">
                                    <h2>{t("newTask.constCaption")}</h2>
                                    <button
                                        className="back-to-main"
                                        onClick={() => {
                                            window.location.pathname = "/dashboard"
                                        }}
                                    >{t("newTask.backToMain")}</button>
                                </div>
                                <section className="constructor-form">
                                    <div className="task-caption">
                                        <h3>{t("newTask.taskName")}</h3>
                                        <button type="button" className="task-title">♥</button>
                                        <input
                                            type="text"
                                            id="task-name"
                                            name="task-name"
                                            placeholder={t("newTask.namePlaceholder")}
                                            value={this.state.inputVal}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    {this.props.inputsList.map((input) => {
                                        return input
                                    })}
                                    <Footer/>
                                </section>
                                <RequiredFields/>
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

const mapDispatchToProps = (dispatch) => {
    return ({
        fromConstToDash: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)