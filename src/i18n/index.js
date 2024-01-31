import spanish from './es.json'
import english from './en.json'

export const LANGUAGES = {
    en: english,
    es: spanish
}


export const geti18n = (currentLocale) => {
    return LANGUAGES[currentLocale] || spanish
}