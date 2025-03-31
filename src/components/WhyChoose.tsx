
import React from 'react';
import { Award, BookOpen, Stethoscope, TrendingUp } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="section-container bg-neutral-beige/50">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Excelência em Cuidados Médicos</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
          Por que escolher a Dra. Adriana Andrade para cuidar da sua saúde metabólica e hormonal
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md card-hover border-t-4 border-brown">
            <div className="text-orange mb-4 mx-auto bg-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Award size={32} />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center text-brown">Experiência Clínica</h3>
            <p className="text-gray-600 text-center">
              Anos de experiência em endocrinologia, com foco em saúde metabólica e hormonal.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover border-t-4 border-brown">
            <div className="text-orange mb-4 mx-auto bg-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <BookOpen size={32} />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center text-brown">Atualização Constante</h3>
            <p className="text-gray-600 text-center">
              Contínua atualização em novos tratamentos e abordagens terapêuticas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover border-t-4 border-brown">
            <div className="text-orange mb-4 mx-auto bg-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <Stethoscope size={32} />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center text-brown">Visão Integrativa</h3>
            <p className="text-gray-600 text-center">
              Abordagem que considera todos os aspectos da saúde e bem-estar do paciente.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md card-hover border-t-4 border-brown">
            <div className="text-orange mb-4 mx-auto bg-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
              <TrendingUp size={32} />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center text-brown">Resultados Comprovados</h3>
            <p className="text-gray-600 text-center">
              Sucesso terapêutico com foco em resultados sustentáveis a longo prazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
