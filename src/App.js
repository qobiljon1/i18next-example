import {useTranslation} from "react-i18next";
import i18next from "i18next";

const language = [
    {
        code: "fr",
        name: "Français",
        country_code: "fr"
    },
    {
        code: "en",
        name: "English",
        country_code: "gb"
    },
    {
        code: "ar",
        name: "عربي",
        country_code: "sa"
    },
    {
        code: "uz",
        name: "Uzbek",
        country_code: "uz"
    },
]

const GlobalIcon = ({width = 24, height = 24}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className="ionicon" viewBox="0 0 512 512">
        <title>Globe</title>
        <path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none"
              stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
        <path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
              fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
        <path
            d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" d="M256 48v416M464 256H48"/>
    </svg>
)

function App() {
    const {t} = useTranslation()
    const number_of_days = new Date()
    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                        <GlobalIcon/>
                    </button>
                    <ul className="dropdown-menu">
                        {language.map(({name, code, country_code}) =>
                            <li key={country_code}>
                                <button
                                    className="dropdown-item"
                                    onClick={() => i18next.changeLanguage(code)}
                                >
                                    <span className={`flag-icon flag-icon-${country_code}`}></span>
                                    <span className="mx-1">{name}</span>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <h1 className="fw-bold mb-3">{t("welcome_message")}</h1>
                <p>{t("days_since_release", {number_of_days})}</p>
            </div>
        </div>
    );
}

export default App;
