import {Mail, Phone, MapPin, Facebook, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo_navbar2.png';

const Footer = () => {
  const { t } = useTranslation('footer');
  
  const quickLinks = [
    { name: t('quick_links.solutions'), path: '/solutions' },
    { name: t('quick_links.products'), path: '/products' },
    { name: t('quick_links.about'), path: '/about' },
    { name: t('quick_links.contact'), path: '/contact' }
  ];

  const services = [
    { name: t('services.residential_string'), path: '/solutions/residential-string-inverter-pv-solution' },
    { name: t('services.residential_ess'), path: '/solutions/residential-ess-solution' },
    { name: t('services.microinverter'), path: '/solutions/microinverter-solution' },
    { name: t('services.ci_pv'), path: '/solutions/ci-pv-solution' },
    { name: t('services.ci_ess'), path: '/solutions/ci-ess-solution' },
    { name: t('services.utility_pv'), path: '/solutions/utility-pv-system' },
    { name: t('services.utility_ess'), path: '/solutions/utility-ess-solution' }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="logo" className="h-10" />
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {t('company.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal" />
                <span className="text-gray-300">C25-C26,28/5 Duong Khue Street, Mai Dich Ward, Cau Giay District, Hanoi, Vietnam</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal" />
                <span className="text-gray-300">+84 986 249 212</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal" />
                <span className="text-gray-300">info@thadosoft.vn</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quick_links.title')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path}
                    className="text-gray-300 hover:text-teal transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('services.title')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.path}
                    className="text-gray-300 hover:text-teal transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t('newsletter.title')}</h3>
              <p className="text-gray-300">
                {t('newsletter.subtitle')}
              </p>
            </div>
            
            <form className="flex gap-4">
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-teal hover:bg-teal/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-2">{t('follow_us')}</span>
              <a href="https://www.facebook.com/thadorobot" className="text-gray-400 hover:text-teal transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@thadorobot" className="text-gray-400 hover:text-teal transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;