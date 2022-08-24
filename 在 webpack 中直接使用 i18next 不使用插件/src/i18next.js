import i18next from "i18next";

i18next.init({
  lng: sessionStorage.getItem("lang") || "zh",
  resources: {
    zh: {
      translation: {
        i18n: "国际化"
      }
    },
    en: {
      translation: {
        i18n: "Internationalization"
      }
    }
  }
});

export default i18next;
