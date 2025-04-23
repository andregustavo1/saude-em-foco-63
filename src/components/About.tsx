
import React from 'react';
import { Shield, Heart, UserCheck, Microscope } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Sobre a Dra.</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
              alt="Dra. Adriana Andrade" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="section-subtitle text-3xl mb-4">Dra. Adriana Andrade</h3>
            <p className="text-gray-700 mb-6">
              Médica com mais de 20 anos de experiência, dedicada ao tratamento personalizado 
              e humanizado de pacientes com comorbidades crônicas. Professora de Endocrinologia 
              na Faculdade de Medicina Multivix Cachoeiro.
            </p>
            <p className="text-gray-700 mb-8">
              Comprometida com resultados duradouros e melhoria da qualidade de vida, 
              oferecendo acompanhamento contínuo e adaptado às necessidades individuais 
              de cada paciente.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-orange p-2 bg-orange/10 rounded-full">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Atendimento Humanizado</h4>
                  <p className="text-sm text-gray-600">Cuidado centrado no paciente</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-orange p-2 bg-orange/10 rounded-full">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Tratamentos Personalizados</h4>
                  <p className="text-sm text-gray-600">Adaptados às suas necessidades</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-orange p-2 bg-orange/10 rounded-full">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Acompanhamento Contínuo</h4>
                  <p className="text-sm text-gray-600">Suporte constante e acessível</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="text-orange p-2 bg-orange/10 rounded-full">
                  <Microscope size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brown">Medicina Baseada em Evidências</h4>
                  <p className="text-sm text-gray-600">Tratamentos cientificamente validados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
