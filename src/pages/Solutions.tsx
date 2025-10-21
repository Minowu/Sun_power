import { motion } from 'framer-motion';
import { Home, Building, Factory, Leaf, Zap, Shield, TrendingUp } from 'lucide-react';
import PageHero from '../components/PageHero';
import aboutHero from '../assets/about_hero.jpg';

const Solutions = () => {
  const solutions = [
    {
      icon: <Home className="h-8 w-8 text-teal-500" />,
      title: 'Giải Pháp Gia Đình',
      description: 'Hệ thống điện mặt trời cho hộ gia đình, tiết kiệm chi phí điện hàng tháng',
      features: ['Tiết kiệm 70-90% hóa đơn điện', 'Bảo hành 25 năm', 'Lắp đặt nhanh chóng', 'Giám sát từ xa'],
      capacity: '3kW - 10kW',
      price: 'Từ 50 triệu VNĐ'
    },
    {
      icon: <Building className="h-8 w-8 text-teal-500" />,
      title: 'Giải Pháp Doanh Nghiệp',
      description: 'Hệ thống điện mặt trời quy mô lớn cho các tòa nhà văn phòng và trung tâm thương mại',
      features: ['Tiết kiệm chi phí vận hành', 'Tăng giá trị bất động sản', 'Bảo trì định kỳ', 'Hỗ trợ 24/7'],
      capacity: '50kW - 500kW',
      price: 'Từ 500 triệu VNĐ'
    },
    {
      icon: <Factory className="h-8 w-8 text-teal-500" />,
      title: 'Giải Pháp Công Nghiệp',
      description: 'Hệ thống điện mặt trời cho các nhà máy và khu công nghiệp',
      features: ['Giảm chi phí sản xuất', 'Đảm bảo nguồn điện ổn định', 'Tối ưu hóa hiệu suất', 'Báo cáo chi tiết'],
      capacity: '500kW - 5MW',
      price: 'Từ 5 tỷ VNĐ'
    }
  ];

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: 'Thân Thiện Môi Trường',
      description: 'Giảm lượng khí thải CO2, góp phần bảo vệ môi trường'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: 'Tiết Kiệm Chi Phí',
      description: 'Giảm đáng kể hóa đơn điện hàng tháng, ROI cao'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: 'Độc Lập Năng Lượng',
      description: 'Không phụ thuộc vào lưới điện, đảm bảo nguồn điện ổn định'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: 'Tăng Giá Trị Tài Sản',
      description: 'Tăng giá trị bất động sản với hệ thống năng lượng xanh'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Tư Vấn & Khảo Sát',
      description: 'Khảo sát địa điểm, đánh giá nhu cầu và tư vấn giải pháp phù hợp'
    },
    {
      step: '02',
      title: 'Thiết Kế & Báo Giá',
      description: 'Thiết kế hệ thống chi tiết và cung cấp báo giá minh bạch'
    },
    {
      step: '03',
      title: 'Lắp Đặt & Vận Hành',
      description: 'Lắp đặt chuyên nghiệp và đưa hệ thống vào vận hành'
    },
    {
      step: '04',
      title: 'Bảo Trì & Hỗ Trợ',
      description: 'Bảo trì định kỳ và hỗ trợ kỹ thuật 24/7'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Giải Pháp"
        subtitle="Giải pháp năng lượng mặt trời toàn diện cho mọi nhu cầu"
        backgroundImage={aboutHero}
      />

      {/* Solutions Section */}
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
              Giải Pháp Chuyên Biệt
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tùy chỉnh giải pháp phù hợp với từng loại hình và quy mô khác nhau
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Công suất:</span>
                    <span className="font-semibold text-navy">{solution.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Giá:</span>
                    <span className="font-bold text-teal-500">{solution.price}</span>
                  </div>
                </div>

                <button className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
                  Tư vấn chi tiết
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Lợi Ích Vượt Trội
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những lợi ích thiết thực mà năng lượng mặt trời mang lại
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Quy Trình Thực Hiện
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quy trình chuyên nghiệp từ tư vấn đến vận hành
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-teal-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
              <button className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-500 transition-colors">
                Xem dự án mẫu
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
