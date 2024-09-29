import {
  dateEnUS,
  dateJaJP,
  dateZhCN,
  enUS,
  jaJP,
  zhCN,
} from 'naive-ui';
import { h } from 'vue';
import { useI18n } from 'vue-i18n';

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

const localeMap: Record<string, { locale: typeof enUS, dateLocale: typeof dateEnUS }> = {
  'en': { locale: enUS, dateLocale: dateEnUS },
  'zh-CN': { locale: zhCN, dateLocale: dateZhCN },
  'ja': { locale: jaJP, dateLocale: dateJaJP },
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
