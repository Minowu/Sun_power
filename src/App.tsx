
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solution';
import QualityControl from './components/QualityControll';
import Products from './components/Product';
import Projects from './components/Project';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Solutions />
      <QualityControl />
      <News />
      <Footer />
    </div>
  );
}

export default App;