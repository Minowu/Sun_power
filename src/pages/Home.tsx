import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Solutions from '../components/home/Solution';
import QualityControl from '../components/home/QualityControll';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Solutions />
      <QualityControl />
      <CTA />
    </div>
  );
};

export default Home;
