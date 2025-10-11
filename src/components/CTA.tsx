import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAImage from '../assets/CTA.png';

const CallToAction = () => {
  return (
    <section className="relative w-full bg-cover h-[400px] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CTAImage})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/22"></div>
      {/* Content */}
      <div className="relative -top-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
            Let's create something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-teal hover:bg-teal/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
              <span>Liên hệ ngay</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CallToAction;