import { motion } from 'framer-motion';

interface SolutionOverviewProps {
  title: string;
  image: string;
}

const SolutionOverview = ({ title, image }: SolutionOverviewProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            {title}
          </h2>
          <div className="max-w-4xl mx-auto">
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
