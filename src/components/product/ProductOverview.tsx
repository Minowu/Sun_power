import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProductOverviewProps {
  name: string;
  images: string[];
  summary: string;
  keyFeatures: string[];
  datasheetLink: string;
  productId?: string; // Add productId for translations
}

const ProductOverview = ({ name, images, summary, keyFeatures, datasheetLink, productId }: ProductOverviewProps) => {
  const { t } = useTranslation('product-detail');
  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-24"
          >
            <div className="rounded-2xl p-8">
              <img 
                src={images[0]} 
                alt={name}
                className="object-contain img-hover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              {name}
            </h2>
            
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              {summary}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white/90 mb-4">
                {t('overview.keyFeaturesLabel')}
              </h3>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-white/70 text-sm">
                      {productId ? t(`products:keyFeatures.${productId}.${index}`, feature) : feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Datasheet Link */}
            <a
              href={datasheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-teal-600 transition-colors"
            >
              <ExternalLink size={20} />
              {t('overview.datasheetLabel')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;


