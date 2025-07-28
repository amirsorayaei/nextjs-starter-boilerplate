const rtlLanguages = ["fa"]; // Define your RTL languages

const getTextDirection = (locale: string) => {
  return rtlLanguages.includes(locale) ? "rtl" : "ltr";
};

export default getTextDirection;
