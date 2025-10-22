import { motion } from 'framer-motion';

interface ProductDetailTabsProps {
  detailContent: string;
  detailImageDescription: string;
  detailImage: string;
}

const ProductContent = ({ 
  detailContent, 
  detailImageDescription,
  detailImage
}: ProductDetailTabsProps) => {

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tab Content 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
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

        {/* Tab Content 2 - Đổi vị trí text và image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg order-2 md:order-1">
            <img 
              src={detailImage} 
              alt="Product Features"
              className="w-full h-auto object-contain"
            />
            <p className="text-sm text-gray-500 mt-4 text-center">
              {detailImageDescription}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-navy mb-6">
              Tính Năng Nổi Bật
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {detailContent}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductContent;

