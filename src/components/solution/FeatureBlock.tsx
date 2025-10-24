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
      className="bg-transparent rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="w-full flex justify-between items-start gap-8 px-12 pt-30 max-w-7xl max-md:text-xs max-md:px-0 max-md:pt-10">
          <div className="flex-1">
            <h3 className="text-5xl text-gradient-teal-blue font-bold max-md:text-3xl">
              {title}
            </h3>
          </div>
          <div className="flex-1 space-y-4">
            <div className="text-left">
              <span className="text-white/70">{detail1}</span>
            </div>
            <div className="text-left">
              <span className="text-white/70">{detail2}</span>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src={image} 
            alt={title}
            className="w-full h-[600px] rounded-lg max-md:h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureBlock;
