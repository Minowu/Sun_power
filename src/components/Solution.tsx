import { useState, useEffect, useRef, useCallback } from 'react';

// ===================================================================
// COMPONENT SOLUTIONS - TỰ CHỨA MỌI THỨ
// ===================================================================
const Solutions = () => {
  // 1. SỬA LẠI MOCK DATA ĐỂ CHỨA CÁC MẢNG MÀU
  // Mỗi tab giờ sẽ có một bộ màu riêng, đúng như ý tưởng ban đầu.
  const mockData = [
    {
      id: 1,
      title: "Giải pháp 1",
      content: {
        colors: ["#E5E7EB", "#8B4545", "#77B97B"], // Màu giống trong ảnh đầu tiên
      },
    },
    {
      id: 2,
      title: "Giải pháp 2",
      content: {
        colors: ["#3B82F6", "#FACC15", "#EC4899"], // Bộ màu khác cho tab 2
      },
    },
    {
      id: 3,
      title: "Giải pháp 3",
      content: {
        colors: ["#6366F1", "#10B981", "#F97316"], // Bộ màu khác cho tab 3
      },
    },
  ] as const;

  const autoPlayInterval = 6000;

  // Logic state và effect không đổi
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

  // Giao diện (JSX)
  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Giải pháp của chúng tôi
        </h2>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {mockData.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTabIndex(index)}
              className={`relative py-4 px-1 font-medium transition-colors ${
                activeTabIndex === index
                  ? 'text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
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

      {/* 2. SỬA LẠI PHẦN HIỂN THỊ NỘI DUNG ĐỂ HIỆN CÁC KHỐI MÀU */}
      <div className="mt-8">
        {activeContent && (
          <div 
            key={activeTabIndex} 
            className="animate-fadeIn flex h-48 sm:h-56 w-full rounded-lg overflow-hidden shadow-md"
          >
            {/* Lặp qua mảng màu của tab đang active và render các khối div */}
            {activeContent.colors.map((color, index) => (
              <div 
                key={index} 
                className="flex-1 h-full transition-colors duration-500" 
                style={{ backgroundColor: color }} 
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Solutions;