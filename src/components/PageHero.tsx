import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const PageHero = ({ title, subtitle, backgroundImage }: PageHeroProps) => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section 
      className="relative w-screen h-[600px] flex items-center justify-center overflow-hidden"
      style={backgroundStyle}
    >
      {/* Overlay for image */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
