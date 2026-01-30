import React from 'react';

const experiences = [
  {
    icon: 'lock',
    title: 'Privacidad Absoluta',
    description: 'Sesiones privadas individuales en un entorno de lujo oscuro para máxima concentración.'
  },
  {
    icon: 'verified',
    title: 'Pigmentos Premium',
    description: 'Solo utilizamos tintas de grado médico con la mayor retención y brillo del mercado mundial.'
  },
  {
    icon: 'brush',
    title: 'Diseño Exclusivo',
    description: 'Cada pieza es única e irrepetible, diseñada específicamente para tu anatomía.'
  }
];

export default function Experience() {
  return (
    <section className="bg-zinc-950/50 py-32 mt-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">
              La Experiencia <span className="text-primary">Canvas</span>
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
              Un entorno brutalista diseñado para la creación artística sin límites. Elevamos el tatuaje a una experiencia de hospitalidad de lujo.
            </p>
            <div className="w-20 h-1 bg-primary"></div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col gap-6">
                <span className="material-symbols-outlined text-primary text-4xl">{exp.icon}</span>
                <h4 className="text-xl font-bold uppercase tracking-tight">{exp.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
