export const getLocaleValue = ({
  language,
  locales,
}) => locales.find(item => item.locale === language)?.value;
