import backgroundVideo from '../../assets/Service_home.mp4';
import icon1 from '../../assets/icon_quality_1.png';
import icon2 from '../../assets/icon_quality_2.png';
import icon3 from '../../assets/icon_quality_3.png';
import icon4 from '../../assets/icon_quality_4.png';
import { useTranslation } from 'react-i18next';

const QualityControl = () => {
  const { t } = useTranslation('home');
  
  const services = [
    {
      iconClass: icon1,
      text: t('quality.services.control.title'),
      description: t('quality.services.control.description'),
    },
    {
      iconClass: icon2,
      text: t('quality.services.assurance.title'),
      description: t('quality.services.assurance.description'),
    },
    {
      iconClass: icon3,
      text: t('quality.services.testing.title'),
      description: t('quality.services.testing.description'),
    },
    {
      iconClass: icon4,
      text: t('quality.services.digitalization.title'),
      description: t('quality.services.digitalization.description'),
    },
  ];

  return (
    <section className="relative w-screen h-[1000px] py-16 px-4 sm:px-6 lg:px-8 mt-10 bg-neutral-200">
    <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold tracking-tight text-teal  max-md:text-4xl">
        {t('quality.title')}
        </h2>
    </div>
    <div className="absolute top-35 left-0 w-screen h-[500px]">
        <video 
          src={backgroundVideo} 
          autoPlay 
          muted 
          loop 
          className="w-full h-full object-cover rounded-2xl" 
        />
    </div>
    <div className="absolute bg-gray-900/20 text-center text-white top-2/7 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 flex flex-col gap-4 items-center justify-center backdrop-blur-sm rounded-xl">
      <h2 className="sm:text-2xl">
      {t('quality.subtitle')}
      </h2>
      <p className="sm:text-lg w-full">
      {t('quality.description')}
      </p>
    </div>
      {/* Container nội dung */}
      <div className="relative top-100 text-center">
        {/* Card Dịch vụ */}
        <div className="mt-12 h-[280px] max-w-6xl mx-auto grid grid-cols-1 grid-cols-4 bg-white shadow-2xl rounded-2xl border border-gray-200 md:divide-x md:divide-gray-200">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 overflow-hidden flex flex-col items-center gap-4 group hover:bg-gray-50 transition-all duration-300 ${
                index > 0 ? 'border-t border-gray-200 md:border-t-0' : ''
              }`}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center transform translate-y-7 group-hover:bg-teal-200 group-hover:translate-y-0 transition-all duration-300">
                <img src={service.iconClass} alt={service.text} className="w-16 h-16 object-contain" />
              </div>
                <h3 className="font-semibold text-gray-800 text-center group-hover:text-teal-600 transform translate-y-7 group-hover:translate-y-0 transition-all duration-300 max-md:text-lg max-sm:text-xs">{service.text}</h3>
                <p className="max-md:hidden text-gray-600 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">{service.description}</p>
            </div>
          ))}
        </div>
        {/* Nút bấm */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-block px-10 py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-full hover:bg-teal-600 hover:text-white transition-colors duration-300"
          >
            {t('quality.button')}  &gt;
          </a>
        </div>
      </div>
    </section>
  );
};


export default QualityControl;