import React, { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const screenshots = [
    {
      id: 1,
      title: "Visão Geral",
      description: "Dashboard completo com gráficos.",
      src: "/assets/images/dashboard.jpg"
    },
    {
      id: 2,
      title: "Controle de Notas",
      description: "Listagem com filtros avançados.",
      src: "/assets/images/minhas nf.jpg"
    },
    {
      id: 3,
      title: "Frente de Caixa",
      description: "PDV rápido e simplificado.",
      src: "/assets/images/pdv.jpg"
    },
    {
      id: 4,
      title: "Detalhes",
      description: "Visualize dados fiscais e XML.",
      src: "/assets/images/detalhe das minhas nf.jpg"
    },
    {
      id: 5,
      title: "Importação",
      description: "Cadastro via XML automático.",
      src: "/assets/images/importar produtos.jpg"
    }
  ];

  // Duplicating the array to create the seamless infinite scroll effect
  const carouselItems = [...screenshots, ...screenshots];

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-800 overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            A plataforma por dentro
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Navegue pelos prints do sistema.
            <br />
            <span className="text-sm text-slate-500">(Passe o mouse para pausar e clique para ampliar)</span>
          </p>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative z-10">
        <div className="flex w-max animate-scroll">
          {carouselItems.map((shot, index) => (
            <div 
              key={`${shot.id}-${index}`}
              className="w-[300px] md:w-[400px] mx-4 group relative bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl border border-slate-700/50 overflow-hidden cursor-pointer hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 flex-shrink-0"
              onClick={() => setSelectedImage(shot.src)}
            >
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden bg-slate-900 relative border-b border-slate-700/50">
                <img 
                  src={shot.src} 
                  alt={shot.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  draggable="false"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-slate-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-blue-400">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-white">{shot.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{shot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Image Wrapper */}
          <div 
            className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Screenshot Ampliado" 
              className="max-w-full max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl object-contain ring-1 ring-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
