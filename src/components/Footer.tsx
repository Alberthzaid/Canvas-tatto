import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <h2 className="text-lg font-bold uppercase">Canvas</h2>
          </div>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">
            The Art of Eternity © 2024
          </p>
        </div>
        <div className="flex gap-8">
          <a
            className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest"
            href="#"
          >
            Instagram
          </a>
          <a
            className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest"
            href="#"
          >
            YouTube
          </a>
          <a
            className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest"
            href="#"
          >
            Legal
          </a>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Localización</p>
          <p className="text-sm font-bold uppercase" data-location="Madrid, Spain">
            Calle de la Victoria, 12, Madrid
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
