import i18n from 'i18next';

import { CURRENT_APP_LANGUAGE } from 'constants/common';

import translationEn from '@public/locales/en.json';

// the translations ref: https://react.i18next.com/legacy-v9/step-by-step-guide
const resources = {
  en: {
    translation: translationEn
  }
};

i18n.init({
  resources,
  lng: CURRENT_APP_LANGUAGE,

  keySeparator: '.',

  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
