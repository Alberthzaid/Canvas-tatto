import FilmGrain from './components/FilmGrain';
import Header from './components/Header';
import Hero from './components/Hero';
import EstilosSection from './components/EstilosSection';
import ExperienciaSection from './components/ExperienciaSection';
import PortfolioSection from './components/PortfolioSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <FilmGrain />
      <Header />
      <main className="pt-20">
        <Hero />
        <EstilosSection />
        <ExperienciaSection />
        <PortfolioSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
