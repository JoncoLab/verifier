import React, {Component} from 'react';
import {I18n} from 'react-i18next';
import {RenderFilters, setRenderFilter} from "../store/actions";
import {connect} from 'react-redux';

class DownloadApp extends Component {
    render() {
        return (
            <I18n>
                {
                    (t) => (
                        <main>
                            <section className="download-app">
                                <div className="download-app-caption">
                                    <h2>{t("downloadApp.caption")}</h2>
                                    <button className="back-to-main"
                                            onClick={() => {
                                                this.props.backToMain()
                                            }}
                                    >{t("downloadApp.backToMain")}</button>
                                </div>
                                <div className="download-app-links">
                                    <a className="android-link"
                                       target="_blank"
                                       href="https://play.google.com/store/apps/details?id=com.volpis.verifier"
                                    >
                                        <img className="store-icon" src="../img/google_play_icon.svg"/>
                                        <img className="store-icon" src="../img/google_play_button.svg"/>
                                        <img className="link-bg" src="../img/logo_decor_left.svg"/>
                                    </a>
                                    <a className="ios-link"
                                       target="_blank"
                                       href="https://itunes.apple.com/us/app/testflight/id899247664"
                                    >
                                        <img className="store-icon" src="../img/appstore_icon.svg"/>
                                        <img className="store-icon" src="../img/appstore_button.svg"/>
                                        <img className="link-bg" src="../img/logo_decor.svg"/>
                                    </a>
                                </div>
                            </section>
                        </main>
                    )
                }
            </I18n>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        backToMain: () => {
            dispatch(setRenderFilter(RenderFilters.RENDER_DASHBOARD))
        }
    }
};

export default connect(null, mapDispatchToProps)(DownloadApp)