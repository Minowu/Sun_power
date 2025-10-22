import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { solutionsData } from '../data/solutions';
import aboutHero from '../assets/about_hero.jpg';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Giải Pháp"
        subtitle="Giải pháp năng lượng mặt trời toàn diện cho mọi nhu cầu"
        backgroundImage={aboutHero}
      />

      {/* Solutions Grid */}
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
              Tất Cả Giải Pháp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá các giải pháp năng lượng mặt trời phù hợp với nhu cầu của bạn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/solutions/${solution.slug}`} className="block">
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full">
                    <img 
                      src={solution.overview.image} 
                      alt={solution.overview.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {solution.overview.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Xem chi tiết giải pháp →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
