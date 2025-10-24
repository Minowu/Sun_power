import { motion } from 'framer-motion';

interface SolutionOverviewProps {
  title: string;
  description: string;
  image: string;
}

const SolutionOverview = ({ title, description, image }: SolutionOverviewProps) => {
  return (
    <section className="py-20 bg-white pb-0">
      <div className="mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto mb-6">
            {description}
          </p>
          <div className="max-w-7xl mx-auto">
            <img 
              src={image} 
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionOverview;
