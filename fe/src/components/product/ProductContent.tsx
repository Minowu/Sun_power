import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { ApiProductFeature } from '../../types/product';

interface ProductDetailTabsProps {
  features: ApiProductFeature[];
  detailImage: string;
}

const ProductContent = ({ 
  features,
  detailImage
}: ProductDetailTabsProps) => {
  const { t } = useTranslation('product-detail');

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Content 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
              {features[0]?.title || t('content.productFeaturesLabel')}
            </h3>
            <ul className="space-y-2 list-none">
              {features[0]?.subFeatures.map((subFeature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-white">{subFeature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className=" rounded-2xl p-8 shadow-lg">
            <img 
              src={detailImage} 
              alt={t('content.productDetailAlt')}
              className="img-hover w-full h-auto object-contain"
            />  
          </div>
        </motion.div>

        {/* Tab Content 2 - Đổi vị trí text và image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className=" rounded-2xl p-8 shadow-lg order-2 md:order-1">
            <img 
              src={detailImage} 
              alt={t('content.productFeaturesAlt')}
              className="img-hover w-full h-auto object-contain"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent mb-6">
              {features[1]?.title || t('content.technicalSpecsLabel')}
            </h3>
            <ul className="space-y-2 list-none">
              {features[1]?.subFeatures.map((subFeature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-white">{subFeature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductContent;

