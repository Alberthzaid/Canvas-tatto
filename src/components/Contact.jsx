import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    proyecto: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
  };

  return (
    <section className="bg-background-dark py-32 border-t border-primary/20" id="contacto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white italic">
            Inicia tu <span className="text-primary not-italic">Legado</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light tracking-widest uppercase">Cuéntanos tu idea. Los maestros de Canvas la harán eterna.</p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">Nombre</label>
            <input 
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white transition-all outline-none" 
              placeholder="EJ. JULIÁN CASABLANCAS" 
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">Email</label>
            <input 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white transition-all outline-none" 
              placeholder="EMAIL@CANVAS.ART" 
              type="email"
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">Idea del Proyecto</label>
            <textarea 
              name="proyecto"
              value={formData.proyecto}
              onChange={handleChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white resize-none transition-all outline-none" 
              placeholder="ESTILO, ZONA Y SIGNIFICADO DEL TATUAJE..." 
              rows="3"
            ></textarea>
          </div>
          <div className="md:col-span-2 space-y-4">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">Referencias Visuales</label>
            <div className="luxury-drop-zone relative group min-h-[180px] flex flex-col items-center justify-center transition-all duration-500 cursor-pointer overflow-hidden border border-transparent bg-zinc-900/30">
              <input className="absolute inset-0 opacity-0 cursor-pointer z-20" multiple type="file" />
              <div className="relative z-10 flex flex-col items-center gap-4 py-8 px-6 text-zinc-500 group-hover:text-primary transition-all duration-500 scale-95 group-hover:scale-100 text-center">
                <div className="bg-black/40 p-4 rounded-full border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <span className="material-symbols-outlined text-4xl leading-none">upload</span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-300 group-hover:text-primary">Arrastra o selecciona tus referencias</p>
                  <p className="text-[10px] font-light mt-2 text-zinc-600 italic tracking-[0.2em] uppercase">JPG, PNG, PDF • HASTA 15MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 pt-6">
            <button 
              type="submit"
              className="w-full bg-primary text-black py-7 text-sm font-black uppercase tracking-[0.5em] hover:bg-white hover:shadow-[0_0_30px_rgba(242,185,13,0.4)] transition-all duration-500 active:scale-[0.98] gold-border-glow"
            >
              Enviar Propuesta Exclusiva
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
