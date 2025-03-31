
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LastCTA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5528999952045', '_blank');
  };

  return (
    <section className="bg-gradient-primary py-20 text-white">
      <div className="container mx-auto px-4 text-center animate-on-scroll">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Cuide da sua Saúde com Quem Entende
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 text-white/90">
          Agende uma consulta hoje mesmo e dê o primeiro passo rumo a uma vida mais saudável e equilibrada.
        </p>
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-white text-brown hover:bg-neutral-beige flex items-center gap-2 text-lg px-8 py-6 mx-auto"
        >
          Agende sua Consulta Agora
          <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};

export default LastCTA;
