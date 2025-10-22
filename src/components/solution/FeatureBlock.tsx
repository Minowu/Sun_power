import { motion } from 'framer-motion';

interface FeatureBlockProps {
  title: string;
  detail1: string;
  detail2: string;
  image: string;
}

const FeatureBlock = ({ title, detail1, detail2, image }: FeatureBlockProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-navy mb-6">
            {title}
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">{detail1}</span>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-gray-600">{detail2}</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src={image} 
            alt={title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBlock;
