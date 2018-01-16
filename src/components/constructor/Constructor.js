import React, { Component } from 'react';
import {I18n} from 'react-i18next';
import TextInput from './inputTypes/TextInput';
import ImageInput from './inputTypes/ImageInput';
import VideoInput from './inputTypes/VideoInput';
import Footer from './Footer';
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
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="constructor">
                                <div className="constructor-top">
                                    <h2>{t("newTask.constCaption")}</h2>
                                    <button
                                        className="back-to-main"
                                        onClick={() => {
                                            window.location.pathname = "/dashboard"
                                        }}
                                    >{t("newTask.backToMain")}</button>
                                </div>
                                <form className="constructor-form" onSubmit={(e) => e.preventDefault()}>
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
                                    <TextInput/>
                                    <ImageInput/>
                                    <VideoInput/>
                                    <Footer/>
                                </form>
                            </section>
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

const mapDispatchToProps = (dispatch) => {
    return ({
        fromConstToDash: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Constructor)