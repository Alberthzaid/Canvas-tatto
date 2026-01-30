import React from 'react';

interface EstiloCard {
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
}

const estilos: EstiloCard[] = [
  {
    title: 'Blackwork',
    subtitle: 'Saturación Perfecta',
    imageUrl: 'https://images.unsplash.com/photo-1651216829774-2fe92d410292?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Tatuador profesional especializado en blackwork'
  },
  {
    title: 'Realismo',
    subtitle: 'Micro-detalle HD',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1707372367558-7421b2982ade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRhdHRvfGVufDB8fDB8fHww',
    alt: 'Tatuador profesional especializado en realismo'
  },
  {
    title: 'Linework',
    subtitle: 'Precisión Geométrica',
    imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Tatuador profesional especializado en linework'
  }
];

const EstilosSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-32">
      <div className="flex items-end justify-between border-b border-primary/30 pb-4 mb-12">
        <div>
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            Curaduría
          </span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Estilos de Autor</h2>
        </div>
        <p className="text-zinc-500 text-sm hidden md:block max-w-[300px] text-right">
          Especialistas en técnicas de alta complejidad y acabados quirúrgicos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {estilos.map((estilo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden aspect-[3/4] bg-zinc-900"
            data-alt={estilo.alt}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%), url("${estilo.imageUrl}")`
              }}
            />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                {estilo.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                {estilo.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstilosSection;
