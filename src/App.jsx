import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Styles from './components/Styles';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FilmGrain from './components/FilmGrain';
import './App.css';

function App() {
  return (
    <div className="dark bg-background-light dark:bg-background-dark font-display text-white selection:bg-primary selection:text-black">
      <FilmGrain />
      <Header />
      <main className="pt-20">
        <Hero />
        <Styles />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
