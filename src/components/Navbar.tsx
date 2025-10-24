import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo1 from '../assets/logo_navbar1.png';
import logo2 from '../assets/logo_navbar2.png';

const Navbar = () => {
  const { t, i18n } = useTranslation('navbar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('home'), path: '/' },
    { name: t('products'), path: '/products' },
    { name: t('solutions'), path: '/solutions' },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' }
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'vi' ? 'en' : 'vi');
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isHovered
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 2xl:px-50">
        <div className="flex items-center justify-between h-13">
          {/* Logo */}
          <div className="flex items-center">
            <img className="h-9" src={isScrolled || isHovered ? logo2 : logo1} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`btn-nav font-light transition-colors hover:text-teal-500 ${
                  isScrolled || isHovered ? 'text-navy' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Toggle */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 font-light transition-colors hover:text-teal-500 px-3 py-2 rounded-lg hover:bg-white/10 ${
                isScrolled || isHovered ? 'text-navy' : 'text-white'
              }`}
              title={t('language.switch')}
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{t('language.current')}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isHovered ? 'text-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || isHovered ? 'text-navy' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-navy font-medium hover:text-teal-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-navy font-medium hover:text-teal-500 transition-colors mt-2 pt-2 border-t border-gray-200"
              >
                <Globe className="h-4 w-4" />
                <span>{t('language.switch')}</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;