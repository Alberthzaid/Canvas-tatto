import React from 'react';
import Logo from './Logo';
import Button from './Button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-background-dark/80 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <h2 className="text-xl font-bold tracking-tighter uppercase">Canvas Tattoo</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors" href="#">
            Galería
          </a>
          <a className="text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors" href="#">
            Estilos
          </a>
          <a className="text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors" href="#">
            Artistas
          </a>
          <a className="text-xs font-semibold tracking-widest uppercase hover:text-primary transition-colors" href="#">
            El Estudio
          </a>
        </nav>
        <Button variant="primary">RESERVAR AHORA</Button>
      </div>
    </header>
  );
};

export default Header;
