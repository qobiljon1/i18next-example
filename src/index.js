import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import {useTranslation, initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import './index.css';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ["localStorage"]
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translations.json'
        },
        react: {useSuspense: false}
    });

function App() {
    const {t} = useTranslation();

    return <h2>{t('Welcome to React')}</h2>;
}

const appRoot = document.getElementById('root')
const root = createRoot(appRoot);

const render = Component => {
    root.render(
        <Component/>
    )
}
render(App)
