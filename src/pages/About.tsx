import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';
import PageHero from '../components/PageHero';
import aboutHero from '../assets/about_hero.jpg';
import aboutImage from '../assets/aboutImage.png';

const About = () => {
  const stats = [
    { number: '500+', label: 'Dự án hoàn thành' },
    { number: '50+', label: 'Khách hàng tin tưởng' },
    { number: '10+', label: 'Năm kinh nghiệm' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-teal-500" />,
      title: 'Tầm nhìn',
      description: 'Trở thành công ty hàng đầu về giải pháp năng lượng mặt trời tại Việt Nam'
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: 'Sứ mệnh',
      description: 'Mang đến giải pháp năng lượng sạch, tiết kiệm và bền vững cho mọi gia đình'
    },
    {
      icon: <Award className="h-8 w-8 text-teal-500" />,
      title: 'Giá trị cốt lõi',
      description: 'Chất lượng, uy tín, sáng tạo và cam kết phục vụ khách hàng tốt nhất'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="Về Chúng Tôi"
        subtitle="Sun Power - Đối tác tin cậy trong lĩnh vực năng lượng mặt trời"
        backgroundImage={aboutHero}
      />

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-teal-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Story Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Về Thadorobot Energy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thadorobot Energy được thành lập với niềm tin rằng năng lượng mặt trời không chỉ là giải pháp 
                tiết kiệm chi phí mà còn là cách để bảo vệ môi trường cho thế hệ tương lai.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Với đội ngũ kỹ sư giàu kinh nghiệm và công nghệ tiên tiến, chúng tôi cam kết mang đến 
                những giải pháp năng lượng mặt trời chất lượng cao, phù hợp với nhu cầu của từng khách hàng.
              </p>
              <p className="text-lg text-gray-600">
                Từ những dự án nhỏ lẻ đến các hệ thống quy mô lớn, chúng tôi luôn đặt chất lượng và 
                sự hài lòng của khách hàng lên hàng đầu.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-teal-500 h-96 rounded-lg flex items-center justify-center border-radius-lg">
                <img src={aboutImage} alt="About" className="w-full h-full object-cover rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20">
        <div className="mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Giá Trị Cốt Lõi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những nguyên tắc và giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
