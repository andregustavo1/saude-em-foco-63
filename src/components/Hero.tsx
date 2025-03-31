
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5528999952045', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brown/80 to-orange/70 mix-blend-multiply z-10"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop')",
          backgroundPosition: "center" 
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20 pt-24 animate-fade-in">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
            Cuidado Especializado para sua Saúde Metabólica
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{animationDelay: '0.2s'}}>
            Tratamentos personalizados para obesidade, diabetes e distúrbios hormonais
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-white text-brown hover:bg-neutral-beige flex items-center gap-2 animate-slide-up text-lg px-6 py-6" 
            style={{animationDelay: '0.4s'}}
          >
            Agende sua Consulta
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
