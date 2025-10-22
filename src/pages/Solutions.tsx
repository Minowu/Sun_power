import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { solutionsData } from '../data/solutions';
import aboutHero from '../assets/about_hero.jpg';

const categoryLabels = {
  residential: 'Residential',
  ci: 'C&I',
  utility: 'Utility'
};

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Giải Pháp"
        subtitle="Giải pháp năng lượng mặt trời toàn diện cho mọi nhu cầu"
        backgroundImage={aboutHero}
      />

      {/* Solutions by Category */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {(['residential', 'ci', 'utility'] as const).map((category, categoryIndex) => {
            const categorySolutions = solutionsData.filter(solution => solution.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="flex items-center mb-8">
                  <h2 className="text-3xl font-bold text-navy mr-4">
                    {categoryLabels[category]}
                  </h2>
                  <div className="flex-1 h-0.5 bg-teal-500"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categorySolutions.map((solution, index) => (
                    <motion.div
                      key={solution.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link to={`/solutions/${solution.slug}`} className="block">
                        <div className="bg-white rounded-lg shadow-lg p-6 h-[300px]">
                          <img 
                            src={solution.overview.image} 
                            alt={solution.overview.title}
                            className="w-full h-48 object-cover rounded-lg mb-4 img-hover"
                          />
                          <h3 className="text-xl font-bold text-navy mb-2">
                            {solution.overview.title}
                          </h3>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Solutions;
