import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import App from "./App";
import 'bootstrap/dist/js/bootstrap.bundle';
import "bootstrap/dist/css/bootstrap.min.css"
import "flag-icon-css/css/flag-icons.min.css"
import './index.css';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr', 'ar'],
        fallbackLng: "en",
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'subdomain', 'path'],
            caches: ["cookie"]
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translations.json'
        },
        react: {useSuspense: false}
    });

const appRoot = document.getElementById('root')
const root = createRoot(appRoot);

const render = Component => {
    root.render(
        <Component/>
    )
}
render(App)
