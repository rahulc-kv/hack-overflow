import { LocalStorage } from '@services/storage';
import { LANGUAGE_LOCAL_STATE, APP_LANGUAGES } from '@constants/common';

import i18n from '../i18n';

// eslint-disable-next-line @typescript-eslint/ban-types
export const translate = (key: string, variables?: object): string =>
  i18n.t(key, variables);

export const getCurrentLanguage = (): string => i18n.languages[0];

export const switchAppLanguage = (lang: APP_LANGUAGES): void => {
  const currentLanguage =
    LocalStorage?.get<string>(LANGUAGE_LOCAL_STATE) ?? APP_LANGUAGES.EN;
  const tartgetLanguage = APP_LANGUAGES[lang] || currentLanguage;
  LocalStorage?.set(LANGUAGE_LOCAL_STATE, tartgetLanguage);
  window?.location?.reload();
};
