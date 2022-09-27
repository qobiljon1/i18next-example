import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import {useTranslation, initReactI18next} from "react-i18next";
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import './index.css';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    // .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next"
                }
            },
            fr: {
                translation: {
                    "Welcome to React": "bir nimalar demoqchiman",
                }
            }
        },
        // lng: "fr", // if you're using a language detector, do not define the lng option
        fallbackLng: "fr",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
        detection: {
            order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
            caches: ["localStorage"]
        }
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
