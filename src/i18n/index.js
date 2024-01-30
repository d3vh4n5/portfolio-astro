import spanish from './es.json'
import english from './en.json'

import { HERO } from '@/data/hero.data'

const ENGLISH_CONTENT = {...spanish, ...HERO['en']}
const SPANISH_CONTENT = {...spanish, ...HERO['es']}

export const LANGUAGES = {
    en: ENGLISH_CONTENT,
    es: SPANISH_CONTENT
}


export const geti18n = (currentLocale) => {
    return LANGUAGES[currentLocale] || spanish
}