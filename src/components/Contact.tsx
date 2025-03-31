
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5528999952045', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:drikaandra@yahoo.com.br';
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/draadrianaandrades', '_blank');
  };

  return (
    <section id="contact" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Entre em Contato</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-brown">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div 
                className="flex items-center gap-4 p-4 rounded-md border border-gray-200 hover:border-orange transition-colors cursor-pointer"
                onClick={handleWhatsAppClick}
              >
                <div className="bg-orange/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">(28) 99995-2045</p>
                </div>
              </div>
              
              <div 
                className="flex items-center gap-4 p-4 rounded-md border border-gray-200 hover:border-orange transition-colors cursor-pointer"
                onClick={handleEmailClick}
              >
                <div className="bg-orange/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">E-mail</h4>
                  <p className="text-gray-600">drikaandra@yahoo.com.br</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-md border border-gray-200">
                <div className="bg-orange/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Endereço</h4>
                  <p className="text-gray-600">Sul do Estado</p>
                </div>
              </div>
              
              <div 
                className="flex items-center gap-4 p-4 rounded-md border border-gray-200 hover:border-orange transition-colors cursor-pointer"
                onClick={handleInstagramClick}
              >
                <div className="bg-orange/10 p-3 rounded-full">
                  <Instagram className="h-6 w-6 text-orange" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Instagram</h4>
                  <p className="text-gray-600">@draadrianaandrades</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d483668.91469950236!2d-41.44833566728518!3d-20.842040299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbb909bccc735ebad%3A0x8e8e8e1c79f4ffce!2sEs%C3%ADrito%20Santo!5e0!3m2!1sen!2sbr!4v1687890184201!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Dra. Adriana Andrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
