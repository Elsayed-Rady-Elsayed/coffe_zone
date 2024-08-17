import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello",
          headerOff: "10% off sitewide - shop now",
          shopAll: "shop all",
          non_food: "non-food",
          foods: "foods",
          contact: "contact",
          branches: "branches",
          addCart: "Add to cart",
          filter: "Filter",
          avilable: "Availablility:",
          price: "Price",
          sortBy: "Sort by:",
          alph: "Aphabetically, A-Z",
          products: "Product",
          le: "LE",
          copyRight: "© 2024, Created By 3am Elsayed",
          search: "Search",
          shopAll: "Shop All",
          OurStore: "Our Store",
          aboutStore: "About Haj Arafa",
          policy: "Return & Exchange Policy",
          contactUs: "contact us",
          quikLink: "QUICK LINKS",
        },
      },
      ar: {
        translation: {
          greeting: "اهلا",
          headerOff: "خصم 10% على جميع أنحاء الموقع – تسوق الآن",
          shopAll: "تسوق",
          non_food: "مستحضرات تجميل",
          foods: "الطعام",
          contact: "تواصل معنا",
          branches: "فروعنا",
          addCart: "اضف لعربه التسوق",
          filter: ":تصفنيف حسب",
          avilable: "التوفر",
          price: "السعر",
          sortBy: ":الترتيب حسب",
          alph: "ابجدي, ا-ب",
          products: "منتج",
          le: "جنيه",
          copyRight: "© 2024, تم تطويره بواسطه عم السيد",
          search: "بحث",
          shopAll: "تسوق",
          OurStore: "فروعنا",
          aboutStore: "عن الحاج عرفه",
          policy: "سياسه الاسترجاع والاستبدال",
          contactUs: "التواصل معنا",
          quikLink: "الروابط السريعه",
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
