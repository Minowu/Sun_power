import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageHero from '../components/PageHero';
import aboutHero from '../assets/about_hero.jpg';
import aboutImage from '../assets/aboutImage.png';
import aboutTarget from '../assets/about.png';

const About = () => {
  const { t } = useTranslation('about');
  
  const stats = [
    { number: '50+', label: t('stats.projects') },
    { number: '15+', label: t('stats.clients') },
    { number: '5+', label: t('stats.experience') },
    { number: '24/7', label: t('stats.support') }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-teal-500" />,
      title: t('values.vision.title'),
      description: t('values.vision.description')
    },
    {
      icon: <Users className="h-8 w-8 text-teal-500" />,
      title: t('values.mission.title'),
      description: t('values.mission.description')
    },
    {
      icon: <Award className="h-8 w-8 text-teal-500" />,
      title: t('values.core_values.title'),
      description: t('values.core_values.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
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
                {t('story.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('story.paragraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('story.paragraph2')}
              </p>
              <p className="text-lg text-gray-600">
                {t('story.paragraph3')}
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
      <section className="pt-20">
        <div className="mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t('values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('values.subtitle')}
            </p>
          </motion.div>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 min-h-[600px] bg-cover bg-center bg-no-repeat justify-center items-center"
            style={{ backgroundImage: `url(${aboutTarget})` }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-gray-800/80 group cursor-pointer h-full flex flex-col justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-white transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-white">
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
