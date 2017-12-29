import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import i18n from "i18next";
import {reactI18nextModule} from "react-i18next";

i18n.use(reactI18nextModule).init({
    fallbackLng: 'ru',
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