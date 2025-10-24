import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import viNavbar from './vi/navbar.json';
import viHome from './vi/home.json';
import viProducts from './vi/products.json';
import viFooter from './vi/footer.json';
import viSolutions from './vi/solutions.json';
import viAbout from './vi/about.json';
import viContact from './vi/contact.json';
import viProductDetail from './vi/product-detail.json';

import enNavbar from './en/navbar.json';
import enHome from './en/home.json';
import enProducts from './en/products.json';
import enFooter from './en/footer.json';
import enSolutions from './en/solutions.json';
import enAbout from './en/about.json';
import enContact from './en/contact.json';
import enProductDetail from './en/product-detail.json';

const resources = {
  vi: {
    navbar: viNavbar,
    home: viHome,
    products: viProducts,
    footer: viFooter,
    solutions: viSolutions,
    about: viAbout,
    contact: viContact,
    'product-detail': viProductDetail
  },
  en: {
    navbar: enNavbar,
    home: enHome,
    products: enProducts,
    footer: enFooter,
    solutions: enSolutions,
    about: enAbout,
    contact: enContact,
    'product-detail': enProductDetail
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    debug: true,
    
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
