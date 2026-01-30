import React from 'react';

const styles = [
  {
    title: 'Blackwork',
    subtitle: 'Saturación Perfecta',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIT_aq5N_ldXA-Fb5Ubb8dWjzb-_g0_88a1Uz9dAkddTYObdVUF8GPYPgydu4VPBTH6guD_X_Y9BnY_sX6JJ5e0OzSYq5UUiCApl85wj4XgU0va9IyJGcn7o26nRDq4fRt7VzWT73_pca12FwWHM22Rfq9uTXMxd5TjU2LQsKHLiQIlHTqi8SeXwhbvAHI8zFvXYwccNJjHJS8sfAOdP__TtVTbZi6zyw-pdR3ZHFPdPJvfSujMRXbIjiqpc7mwzBNo19XZD-pUgg'
  },
  {
    title: 'Realismo',
    subtitle: 'Micro-detalle HD',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD49x2xTEZdZiy_9v1d950B00ZsMjDBOK0P_2VTC3qSiGpfV8T374KRAEy7KQzMhtPyh7WtljNy8XwrdxGGvRqSorc1_0oprbiTCMhmO3FUtUvM3cVbsC_chxwtYqYE01mPO_T5tgnMMBcLjWgOBFqBmjopOH1Q6L-sWDbtXXz883RUzNLSJbImxyPDxFFsoBIvzGDC5WuYuJEjDi6AZ79XY3zWtPGcJ_0RrGyldGkPsPxiQPjLIWLBvsCL4qyCSTKZlTKjNc1F4hs'
  },
  {
    title: 'Linework',
    subtitle: 'Precisión Geométrica',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkDVow0HUQxHMAAWuBu6e58g-BfzWWly0mY8LnbIwBKZScHFMgtOH6vkMPUc_-zv_flnmhXBqyz0cxxiOMJ-TdxeGvAaw8sHfewE0ClKTBqLHm2L1r71urKaSXnqIVogFqA2IoeIngJksDF2Zli8trZ1r2MJd4TvAV9lor7oYBFyZt3CmoZ8WbJTmZ4hElA4QYDXT6NdDeVRiTOShw2wj6fHw870X8k9lr_iqh2aEc-V7NvukScP2ezrrwQRZzUHUvv6UilFDrUrw'
  }
];

export default function Styles() {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-32">
      <div className="flex items-end justify-between border-b border-primary/30 pb-4 mb-12">
        <div>
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">Curaduría</span>
          <h2 className="text-4xl font-black uppercase tracking-tighter">Estilos de Autor</h2>
        </div>
        <p className="text-zinc-500 text-sm hidden md:block max-w-[300px] text-right">
          Especialistas en técnicas de alta complejidad y acabados quirúrgicos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {styles.map((style, index) => (
          <StyleCard key={index} style={style} />
        ))}
      </div>
    </div>
  );
}

function StyleCard({ style }) {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] bg-zinc-900">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%), url("${style.image}")`
        }}
      ></div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">{style.title}</h3>
        <p className="text-xs text-zinc-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{style.subtitle}</p>
      </div>
    </div>
  );
}
