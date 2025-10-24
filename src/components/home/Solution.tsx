import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../../assets/solution_1.jpg';
import image2 from '../../assets/solution_2.jpg';
import image3 from '../../assets/solution_3.jpg';
import image4 from '../../assets/solution_4.jpg';
import image5 from '../../assets/solution_5.jpg';
import image6 from '../../assets/solution_6.jpg';
import image7 from '../../assets/solution_7.jpg';
import icon1 from '../../assets/icon_solution_1.png';
import icon2 from '../../assets/icon_solution_2.png';
import icon3 from '../../assets/icon_solution_3.png';

const Solutions = () => {
  const { t } = useTranslation('home');
  
  const mockData = [
    {
      id: 1,
      icon: icon1,
      title: t('solution_categories.residential'),
      content: {
        images: [
            {
              src: image1,
              title: t('detailed_solutions.residential_string_inverter_pv_solution.title'),
              description: t('detailed_solutions.residential_string_inverter_pv_solution.description'),
              slug: "residential-string-inverter-pv-solution"
            },
            {
              src: image2,
              title: t('detailed_solutions.residential_ess_solution.title'),
              description: t('detailed_solutions.residential_ess_solution.description'),
              slug: "residential-ess-solution"
            },
            {
              src: image3,
              title: t('detailed_solutions.microinverter_solution.title'),
              description: t('detailed_solutions.microinverter_solution.description'),
              slug: "microinverter-solution"
            },
        ], 
      },
    },
    {
      id: 2,
      icon: icon2,
      title: t('solution_categories.commercial'),
      content: {
        images: [
            {
              src: image4,
              title: t('detailed_solutions.ci_pv_solution.title'),
              description: t('detailed_solutions.ci_pv_solution.description'),
              slug: "ci-pv-solution"
            },
            {
              src: image5,
              title: t('detailed_solutions.ci_ess_solution.title'),
              description: t('detailed_solutions.ci_ess_solution.description'),
              slug: "ci-ess-solution"
            },
        ], 
      },
    },
    {
      id: 3,
      icon: icon3,
      title: t('solution_categories.utility'),
      content: {
        images: [
            {
              src: image6,
              title: t('detailed_solutions.utility_pv_system.title'),
              description: t('detailed_solutions.utility_pv_system.description'),
              slug: "utility-pv-system"
            },
            {
              src: image7,
              title: t('detailed_solutions.utility_ess_solution.title'),
              description: t('detailed_solutions.utility_ess_solution.description'),
              slug: "utility-ess-solution"
            },
        ], 
      },
    },
  ] as const;

  const autoPlayInterval = 15000;
  
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const goToNextTab = useCallback(() => {
    setActiveTabIndex(prevIndex => (prevIndex + 1) % mockData.length);
  }, [mockData.length]);

  useEffect(() => {
    intervalRef.current = setInterval(goToNextTab, autoPlayInterval);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTabIndex, autoPlayInterval, goToNextTab]);

  const activeContent = mockData[activeTabIndex]?.content;

  return (
    <section className="w-screen mx-auto p-4 sm:p-6 ">
      <div className="w-screen mx-auto p-4 sm:p-6">
          <h2 className="text-6xl font-bold text-center text-teal mb-4 mt-12">
            {t('solution_categories.title')}
          </h2>

        <div className=" border-gray-200 flex justify-center">
          <nav className="-mb-px flex space-x-18" aria-label="Tabs">
            {mockData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveTabIndex(index)}
                className={`relative py-4 px-1 font-medium transition-colors hover:bg- flex flex-col items-center justify-center gap-2 cursor-pointer ${
                  activeTabIndex === index
                    ? 'text-teal-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {item.icon && (
                  <img src={item.icon} alt={item.title} className="w-12 fit-contain flex justify-center items-center" />
                )}
                {item.title}
                {activeTabIndex === index && (
                  <div
                    key={activeTabIndex}
                    className="absolute bottom-[-1px] left-0 w-full h-[3px] bg-teal-600"
                    style={{ animation: `expandFromCenter ${autoPlayInterval}ms linear` }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-4">
          {activeContent && (
            <div 
              key={activeTabIndex} 
              className="animate-fadeIn flex h-[62vh] w-full overflow-hidden shadow-md space-x-2"
            >
              {activeContent.images.map((imageData, index) => (
                <a 
                  key={index} 
                  href={`/solutions/${imageData.slug}`}
                  className="flex-1 h-full transition-all duration-500 rounded-lg overflow-hidden relative group block" 
                >
                  <img 
                    src={imageData.src}
                    alt={imageData.title}
                    className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
                  />

                  <div className="absolute bottom-22 left-10 right-10 bg-opacity-50 p-4 rounded-lg transform translate-y-full group-hover:translate-y-10 transition-transform duration-300">
                    <h3 className="text-white text-3xl font-bold mb-8">{imageData.title}</h3>
                    <p className="text-white text-sm opacity-90">{imageData.description}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Solutions;