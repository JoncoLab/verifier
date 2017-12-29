import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(reactI18nextModule)
    .init({
        callbackLng: 'ru',
        ns: ['translations'],
        defaultNS: 'translations',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();