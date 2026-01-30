import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background-dark py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="size-6 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48">
                <path d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"></path>
                <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"></path>
              </svg>
            </div>
            <h2 className="text-lg font-bold uppercase">Canvas</h2>
          </div>
          <p className="text-zinc-500 text-xs tracking-widest uppercase">The Art of Eternity © 2024</p>
        </div>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest" href="#">Instagram</a>
          <a className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest" href="#">YouTube</a>
          <a className="hover:text-primary transition-colors uppercase text-xs font-bold tracking-widest" href="#">Legal</a>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">Localización</p>
          <p className="text-sm font-bold uppercase">Calle de la Victoria, 12, Madrid</p>
        </div>
      </div>
    </footer>
  );
}
