import React, { useState, useRef } from 'react';
import Button from './Button';

interface FormData {
  nombre: string;
  email: string;
  idea: string;
  archivos: File[];
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    idea: '',
    archivos: []
  });
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, archivos: [...prev.archivos, ...filesArray] }));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files) {
      const filesArray = Array.from(e.dataTransfer.files);
      setFormData(prev => ({ ...prev, archivos: [...prev.archivos, ...filesArray] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se podría enviar el formulario a un backend
    console.log('Formulario enviado:', formData);
    alert('Propuesta enviada. Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', idea: '', archivos: [] });
  };

  const handleDropZoneClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="bg-background-dark py-32 border-t border-primary/20" id="contacto">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white italic">
            Inicia tu <span className="text-primary not-italic">Legado</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light tracking-widest uppercase">
            Cuéntanos tu idea. Los maestros de Canvas la harán eterna.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">
              Nombre
            </label>
            <input
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white transition-all outline-none"
              placeholder="EJ. JULIÁN CASABLANCAS"
              type="text"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white transition-all outline-none"
              placeholder="EMAIL@CANVAS.ART"
              type="email"
              required
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">
              Idea del Proyecto
            </label>
            <textarea
              name="idea"
              value={formData.idea}
              onChange={handleInputChange}
              className="bg-transparent border-b border-white/10 focus:border-primary focus:ring-0 placeholder:text-zinc-800 py-4 px-1 text-lg font-medium text-white resize-none transition-all outline-none"
              placeholder="ESTILO, ZONA Y SIGNIFICADO DEL TATUAJE..."
              rows={3}
              required
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <label className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/80 ml-1">
              Referencias Visuales
            </label>
            <div
              className={`luxury-drop-zone relative group min-h-[180px] flex flex-col items-center justify-center transition-all duration-500 cursor-pointer overflow-hidden border border-transparent bg-zinc-900/30 ${
                isDragging ? 'bg-primary/10' : ''
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleDropZoneClick}
            >
              <input
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer z-20"
                multiple
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 py-8 px-6 text-zinc-500 group-hover:text-primary transition-all duration-500 scale-95 group-hover:scale-100 text-center">
                <div className="bg-black/40 p-4 rounded-full border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                  <span className="material-symbols-outlined text-4xl leading-none">upload</span>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-300 group-hover:text-primary">
                    Arrastra o selecciona tus referencias
                  </p>
                  <p className="text-[10px] font-light mt-2 text-zinc-600 italic tracking-[0.2em] uppercase">
                    JPG, PNG, PDF • HASTA 15MB
                  </p>
                  {formData.archivos.length > 0 && (
                    <p className="text-xs text-primary mt-2">
                      {formData.archivos.length} archivo(s) seleccionado(s)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 pt-6">
            <Button
              type="submit"
              variant="primary"
              className="w-full py-7 text-sm tracking-[0.5em] hover:bg-white hover:shadow-[0_0_30px_rgba(242,185,13,0.4)] active:scale-[0.98]"
            >
              Enviar Propuesta Exclusiva
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
