import $ from "jquery";
import i18next from "i18next";
import jqueryI18next from "jquery-i18next";

i18next.init({
  lng: sessionStorage.getItem("lang") || "zh",
  resources: {
    zh: {
      translation: {
        i18n: "国际化",
        test: "HTML测试"
      }
    },
    en: {
      translation: {
        i18n: "Internationalization",
        test: "HTML Test"
      }
    }
  }
});

jqueryI18next.init(i18next, $, {
  tName: "t", // --> appends $.t = i18next.t
  i18nName: "i18n", // --> appends $.i18n = i18next
  handleName: "localize", // --> appends $(selector).localize(opts);
  selectorAttr: "data-i18n", // selector for translating elements
  targetAttr: "i18n-target", // data-() attribute to grab target element to translate (if different than itself)
  optionsAttr: "i18n-options", // data-() attribute that contains options, will load/set if useOptionsAttr = true
  useOptionsAttr: false, // see optionsAttr
  parseDefaultValueFromContent: true // parses default values from content ele.val or ele.text
});

export default $;
