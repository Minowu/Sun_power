import { useState, useEffect, useRef, useCallback } from 'react';
import image1 from '../assets/solution_1.jpg';
import image2 from '../assets/solution_2.jpg';
import image3 from '../assets/solution_3.jpg';
import image4 from '../assets/solution_4.jpg';
import image5 from '../assets/solution_5.jpg';
import image6 from '../assets/solution_6.jpg';
import image7 from '../assets/solution_7.jpg';
import icon1 from '../assets/icon_solution_1.png';
import icon2 from '../assets/icon_solution_2.png';
import icon3 from '../assets/icon_solution_3.png';

const Solutions = () => {
  const mockData = [
    {
      id: 1,
      icon: icon1,
      title: "Residential System",
      content: {
        images: [
            {
              src: image1,
              title: "Residential String Inverter PV Solution",
              description: "High-efficiency string inverter system for residential rooftop installations"
            },
            {
              src: image2,
              title: "Residential ESS Solution",
              description: "Advanced energy storage system for home backup and self-consumption"
            },
            {
              src: image3,
              title: "Microinverter Solution",
              description: "Module-level power optimization for maximum energy harvest and safety"
            },
        ], 
      },
    },
    {
      id: 2,
      icon: icon2,
      title: "C&I System",
      content: {
        images: [
            {
              src: image4,
              title: "C&I PV Solution",
              description: "Scalable photovoltaic systems for commercial and industrial facilities"
            },
            {
              src: image5,
              title: "C&I ESS Solution",
              description: "Large-scale energy storage for peak shaving and demand response"
            },
        ], 
      },
    },
    {
      id: 3,
      icon: icon3,
      title: "Utility-Scale System",
      content: {
        images: [
            {
              src: image6,
              title: "Utility PV System",
              description: "Megawatt-scale solar farms for utility grid integration"
            },
            {
              src: image7,
              title: "Utility ESS Solution",
              description: "Grid-scale battery storage for renewable energy stabilization"
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
            Solutions
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
                <div 
                  key={index} 
                  className="flex-1 h-full transition-all duration-500 rounded-lg overflow-hidden relative group" 
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Solutions;