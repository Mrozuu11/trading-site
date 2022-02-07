import supportedLocales from "@/config/supported-locales.js";

// Returns supported locales from config/supported-locales.js
// Allows for dynamic rendering in components (for locale in locales)
export function getSupportedLocales() {
  let annotatedLocales = [];

  for (const code of Object.keys(supportedLocales)) {
    annotatedLocales.push({
      code,
      name: supportedLocales[code],
    });
  }
  return annotatedLocales;
}

// Check whether the locale is on the list of supported locales
export function supportedLocalesInclude(locale) {
  return Object.keys(supportedLocales).includes(locale);
}
