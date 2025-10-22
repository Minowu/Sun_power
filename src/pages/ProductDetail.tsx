import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ProductOverview from '../components/product/ProductOverview';
import ProductContent from '../components/product/ProductContent';
import { productDetails } from '../data/products';
import aboutHero from '../assets/about_hero.jpg';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const currentProduct = productDetails.find(p => p.id === id);

  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-white">
        <PageHero 
          title="Sản Phẩm"
          subtitle="Khám phá các sản phẩm năng lượng mặt trời chất lượng cao"
          backgroundImage={aboutHero}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">Sản phẩm không tồn tại</h1>
            <p className="text-gray-600 mb-4">Vui lòng kiểm tra lại đường dẫn</p>
            <Link 
              to="/products" 
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Quay lại danh sách
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
    {/* // Background Image cho nav */}
      <div className="relative w-screen h-[56px] flex items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${aboutHero})` }}></div>

      {/* Product Overview */}
      <ProductOverview 
        name={currentProduct.name}
        images={currentProduct.images}
        summary={currentProduct.overview.summary}
        keyFeatures={currentProduct.overview.keyFeatures}
        datasheetLink={currentProduct.overview.datasheetLink}
      />

      {/* Product Detail Tabs */}
      <ProductContent 
        detailContent={currentProduct.details.content}
        detailImageDescription={currentProduct.details.imageDescription}
        detailImage={currentProduct.images[0]}
        technicalModels={currentProduct.technical.models}
        technicalGroups={currentProduct.technical.groups}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quan Tâm Đến Sản Phẩm?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Liên hệ ngay để được tư vấn chi tiết và báo giá tốt nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-teal-500 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Liên hệ tư vấn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

