
import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5528999952045', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:drikaandra@yahoo.com.br';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/draadrianaandrades', '_blank');
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
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gradient">Dra. Adriana Andrade</h3>
            <p className="text-gray-300 mb-6">
              Endocrinologia especializada com foco em saúde metabólica e bem-estar integral.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={handleInstagramClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </button>
              <button 
                onClick={handleEmailClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('why-choose')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Por Que Nos Escolher
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Especialidades e Tratamentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Processo de Atendimento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange" />
                <span className="text-gray-300">(28) 99995-2045</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange" />
                <span className="text-gray-300">drikaandra@yahoo.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-orange" />
                <span className="text-gray-300">@draadrianaandrades</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 Dra. Adriana Andrade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
