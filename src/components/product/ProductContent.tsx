import { useState } from 'react';
import { motion } from 'framer-motion';

interface TechnicalParameter {
  name: string;
  values: string[];
}

interface TechnicalGroup {
  groupName: string;
  parameters: TechnicalParameter[];
}

interface ProductDetailTabsProps {
  detailContent: string;
  detailImageDescription: string;
  detailImage: string;
  technicalModels: string[];
  technicalGroups: TechnicalGroup[];
}

const ProductContent = ({ 
  detailContent, 
  detailImageDescription,
  detailImage,
  technicalModels, 
  technicalGroups 
}: ProductDetailTabsProps) => {
  const [activeTab, setActiveTab] = useState<'details' | 'technical'>('details');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
         <button
          onClick={() => setActiveTab('technical')}
          className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-teal-500 text-white"
        >
          Technical Parameters
        </button>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'details' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl font-bold text-navy mb-6">
                  Chi Tiết Sản Phẩm
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {detailContent}
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img 
                  src={detailImage} 
                  alt="Product Detail"
                  className="w-full h-auto object-contain"
                />
                <p className="text-sm text-gray-500 mt-4 text-center">
                  {detailImageDescription}
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'technical' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              {/* Image on left */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <img 
                  src={detailImage} 
                  alt="Technical Specifications"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Technical specs on right */}
              <div>
                <h3 className="text-3xl font-bold text-navy mb-6">
                  Thông Số Kỹ Thuật
                </h3>
                
                {/* Models Header */}
                <div className="bg-teal-500 text-white rounded-t-lg p-4 grid gap-2" 
                     style={{ gridTemplateColumns: `1fr repeat(${technicalModels.length}, 1fr)` }}>
                  <div className="font-bold">Thông số</div>
                  {technicalModels.map((model, index) => (
                    <div key={index} className="font-bold text-center">
                      {model}
                    </div>
                  ))}
                </div>

                {/* Technical Groups */}
                <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
                  {technicalGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="border-b last:border-b-0">
                      <div className="bg-gray-100 px-4 py-3 font-bold text-navy">
                        {group.groupName}
                      </div>
                      {group.parameters.map((param, paramIndex) => (
                        <div
                          key={paramIndex}
                          className="grid gap-2 px-4 py-3 hover:bg-gray-50 transition-colors"
                          style={{ gridTemplateColumns: `1fr repeat(${technicalModels.length}, 1fr)` }}
                        >
                          <div className="text-gray-700 font-medium">
                            {param.name}
                          </div>
                          {param.values.map((value, valueIndex) => (
                            <div key={valueIndex} className="text-gray-600 text-center">
                              {value}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductContent;

