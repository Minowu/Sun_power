import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import ProductOverview from '../components/product/ProductOverview';
import ProductContent from '../components/product/ProductContent';
import { useProduct } from '../hooks/useProduct';
import Hero_img from '../assets/product_detail_img_hero.jpg';


const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('product-detail');
  const { product: currentProduct, loading, notFound } = useProduct(id);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <PageHero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          backgroundImage={Hero_img}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center text-gray-500">{t('loading', 'Đang tải...')}</div>
        </div>
      </div>
    );
  }

  if (notFound || !currentProduct) {
    return (
      <div className="min-h-screen bg-white">
        <PageHero 
          title={t('hero.title')}
          subtitle={t('hero.subtitle')}
          backgroundImage={Hero_img}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">{t('notFound.title')}</h1>
            <p className="text-gray-600 mb-4">{t('notFound.description')}</p>
            <Link 
              to="/products" 
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              {t('notFound.backButton')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
    {/* // Background Image cho nav */}
      {/* Product Overview */}
    <div className="relative w-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${Hero_img})` }}>
      <ProductOverview 
        name={currentProduct.name}
        images={currentProduct.images}
        summary={currentProduct.overview.summary}
        keyFeatures={currentProduct.overview.keyFeatures}
        datasheetLink={currentProduct.overview.datasheetLink}
        productId={currentProduct.id}
      />
    </div>

      {/* Product Detail Tabs */}
      <ProductContent 
        features={currentProduct.features || []}
        detailImage={currentProduct.images[0]}
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
              {t('cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-teal-500 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                {t('cta.button')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;

