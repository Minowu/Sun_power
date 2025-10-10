
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solution';
import Products from './components/Product';
import Projects from './components/Project';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Products />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;