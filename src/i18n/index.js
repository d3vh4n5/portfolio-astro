import spanish from './es.json'
import english from './en.json'

const LANGUAGES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}


export const geti18n = (currentLocale) => {
    if (currentLocale === LANGUAGES.SPANISH) return spanish
    if (currentLocale === LANGUAGES.ENGLISH) return english
    return spanish
}