
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5528999952045', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3 text-foreground' 
          : 'bg-transparent py-5 text-white'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-gradient' : 'text-white'}`}>
            Dra. Adriana Andrade
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className={`hover:text-brown transition-colors`}
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('why-choose')}
            className={`hover:text-brown transition-colors`}
          >
            Diferenciais
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className={`hover:text-brown transition-colors`}
          >
            Tratamentos
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className={`hover:text-brown transition-colors`}
          >
            Atendimento
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`hover:text-brown transition-colors`}
          >
            Contato
          </button>
        </nav>
        
        <Button 
          onClick={handleWhatsAppClick}
          className={`flex items-center gap-2 ${
            scrolled 
              ? 'bg-gradient-primary text-white' 
              : 'bg-white text-brown hover:bg-white/90'
          }`}
        >
          <Phone size={18} />
          <span className="hidden sm:inline">Agendar Consulta</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
