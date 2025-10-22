import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SolutionOverview from '../components/solution/SolutionOverview';
import SchemaFramework from '../components/solution/SchemaFramework';
import FeatureBlock from '../components/solution/FeatureBlock';
import { solutionsData } from '../data/solutions';
import aboutHero from '../assets/about_hero.jpg';

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const currentSolution = solutionsData.find(s => s.slug === slug);

  if (!currentSolution) {
    return (
      <div className="min-h-screen bg-white">
        <PageHero 
          title="Giải Pháp"
          subtitle="Giải pháp năng lượng mặt trời toàn diện cho mọi nhu cầu"
          backgroundImage={aboutHero}
        />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">Solution không tồn tại</h1>
            <p className="text-gray-600 mb-4">Vui lòng kiểm tra lại đường dẫn</p>
            <Link 
              to="/solutions" 
              className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Quay lại danh sách
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title={currentSolution.overview.title}
        subtitle="Giải pháp năng lượng mặt trời toàn diện"
        backgroundImage={aboutHero}
      />

      {/* Solution Overview */}
      <SolutionOverview 
        title={currentSolution.overview.title}
        image={currentSolution.overview.image}
      />

      {/* Schema Framework */}
      <SchemaFramework 
        title={currentSolution.schema.title}
        gifImage={currentSolution.schema.gifImage}
      />

      {/* Features Section */}
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
              Tính Năng Nổi Bật
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những tính năng vượt trội làm nên sự khác biệt của giải pháp
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Feature 1 */}
            <FeatureBlock 
              title={currentSolution.feature1.title}
              detail1={currentSolution.feature1.detail1}
              detail2={currentSolution.feature1.detail2}
              image={currentSolution.feature1.image}
            />

            {/* Feature 2 */}
            <FeatureBlock 
              title={currentSolution.feature2.title}
              detail1={currentSolution.feature2.detail1}
              detail2={currentSolution.feature2.detail2}
              image={currentSolution.feature2.image}
            />

            {/* Feature 3 - Tái sử dụng component FeatureBlock */}
            <FeatureBlock 
              title={currentSolution.feature3.title}
              detail1={currentSolution.feature3.detail1}
              detail2={currentSolution.feature3.detail2}
              image={currentSolution.feature3.image}
            />
          </div>
        </div>
      </section>

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
              Sẵn Sàng Bắt Đầu?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Liên hệ ngay để được tư vấn giải pháp phù hợp nhất cho dự án của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-500 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Tư vấn miễn phí
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
