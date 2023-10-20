import { h } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  dateDeDE,
  dateEnUS,
  dateEsAR,
  dateFrFR,
  dateItIT,
  dateJaJP,
  dateRuRU,
  dateZhCN,
  deDE,
  enUS,
  esAR,
  frFR,
  itIT,
  jaJP,
  ruRU,
  zhCN,
} from 'naive-ui';

export function getLocaleDropdownMenuOptions() {
  const { t, availableLocales } = useI18n();

  return availableLocales.map((al) => {
    return {
      label: () => h(
        'span',
        {},
        {
          default: () => t(`locale`, {}, {
            locale: al,
          }),
        },
      ),
      key: al,
    };
  });
}

const localeMap: Record<string, [typeof enUS, typeof dateEnUS]> = {
  'en': [enUS, dateEnUS],
  'zh-CN': [zhCN, dateZhCN],
  'ja': [jaJP, dateJaJP],
  'de': [deDE, dateDeDE],
  'es': [esAR, dateEsAR],
  'fr': [frFR, dateFrFR],
  'it': [itIT, dateItIT],
  'ru': [ruRU, dateRuRU],
};

/**
 * get naive ui locale and locale for date
 * @param locale locale string
 * @example
 * ```ts
 * const [locale, dateLocale] = getLocale('en');
 * ```
 */
export function getLocale(locale: string) {
  if (locale in localeMap)
    return localeMap[locale];

  return localeMap.en;
}
