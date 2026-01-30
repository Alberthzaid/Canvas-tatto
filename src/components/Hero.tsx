import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuCt7eXzA6yAyayNgN0hkG8hpU1f8bko1kB0NtmBhWcRdzRHX29FHz60aWt97GaomAU4XHhTz2TiwTo-9uLUKTmz2T_WD-Kew49UlufFUv7t14LrqIdJdjk_FWBeF4krAA3N1JTHsF8Xyw2BH-3Yeee-z893-hegmCroaq2o0bBEeDFGcpqTXpnO4mjCoNGxfFBmWWuTKf8B63yMxjUYHFMR__kC7rVXMxHfE_CcgGUUgw9U-Ck6_PE6eI3nKJbdfIOYo0bI0cJ2Iow";

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          data-alt="Macro detail of tattoo needle and ink on skin"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%), url("${heroImageUrl}")`
          }}
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
          Tu piel no es un <span className="text-primary italic">lienzo</span> común.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light tracking-wide">
          Estudio de tatuajes de lujo. Maestría técnica, exclusividad y arte eterno en cada trazo.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full md:w-auto px-10 py-5 text-sm">
            RESERVAR CONSULTA
          </Button>
          <Button variant="secondary" className="w-full md:w-auto px-10 py-5 text-sm">
            VER GALERÍA
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="material-symbols-outlined">expand_more</span>
      </div>
    </section>
  );
};

export default Hero;
