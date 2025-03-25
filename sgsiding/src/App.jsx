import './App.css';
import Navbar from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import Loading from './components/ui/Loading';
import { useLoading } from './hooks/useLoading';
import Siding from './components/ui/Siding';
import Services from '../src/pages/Services';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';

function App() {
  const isLoading = useLoading();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className='content'>
        <section id='home' className='hero-section'>
          <Siding />
        </section>
        <section id='services' className='section'>
          <h2>Our Services</h2>
          <Services />
        </section>
        <section id='about' className='section'>
          <h2>About Us</h2>
          <About />
        </section>
        <section id='contact' className='section'>
          <h2>Contact Us</h2>
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
