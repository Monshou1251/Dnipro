// src/i18n.js
import { createI18n } from 'vue-i18n'
import common from '@/localization/common'
import cabinet from '@/localization/cabinet'

const messages = {
  en: {
    ...common.en,
    ...cabinet.en
  },
  ru: {
    ...common.ru,
    ...cabinet.ru
  },
  uz: {
    ...common.uz,
    ...cabinet.uz
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
