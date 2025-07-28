const rtlLanguages = ["fa"]; // Define your RTL languages

const useTextDirection = (locale: string) => {
  return rtlLanguages.includes(locale) ? "rtl" : "ltr";
};

export default useTextDirection;
