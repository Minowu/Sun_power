import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/hero_video.mp4';

const Hero = () => {

  return (
    <section className="relative h-[105vh] flex items-center justify-left overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      
      {/* Content với Scroll Animation */}
      <div 
        className="relative z-10 max-w-7xl ml-0 px-4 sm:px-6 lg:px-8 text-left"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Clean Energy for 
            <br />
            <span className="text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-yellow bg-gradient-to-r from-yellow to-yellow/80 bg-clip-text text-transparent">
              Sustainable Future
            </span>
          </motion.h1>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-left gap-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <a 
              href="/solutions"
              className="group opacity-90 bg-yellow hover:bg-teal/90 text-navy font-semibold px-5 py-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:opacity-100 flex items-center space-x-2"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;