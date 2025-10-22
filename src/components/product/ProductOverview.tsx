import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProductOverviewProps {
  name: string;
  images: string[];
  summary: string;
  keyFeatures: string[];
  datasheetLink: string;
}

const ProductOverview = ({ name, images, summary, keyFeatures, datasheetLink }: ProductOverviewProps) => {
  return (
    <section className="py-20 bg-white">
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
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <img 
                src={images[0]} 
                alt={name}
                className="w-full h-auto object-contain"
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
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {name}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {summary}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Tính Năng Nổi Bật
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
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Datasheet Link */}
            <a
              href={datasheetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
            >
              <ExternalLink size={20} />
              Tải Datasheet
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;


