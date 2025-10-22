import { motion } from 'framer-motion';

interface SchemaFrameworkProps {
  title: string;
  gifImage: string;
}

const SchemaFramework = ({ title, gifImage }: SchemaFrameworkProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
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
          <div className="max-w-5xl mx-auto">
            <img 
              src={gifImage} 
              alt={title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchemaFramework;
