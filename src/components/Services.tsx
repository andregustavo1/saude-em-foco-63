
import React from 'react';
import { Weight, Activity, Thermometer, Pill, Apple } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Especialidades e Tratamentos</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Activity className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Diabetes
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Gerenciamento eficaz do diabetes com monitoramento personalizado, ajuste medicamentoso 
                e orientações para controle glicêmico. Prevenção de complicações e melhoria da 
                qualidade de vida.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Weight className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Obesidade
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Abordagem personalizada para perda de peso saudável e sustentável, com acompanhamento 
                nutricional e medicamentoso, quando necessário. Foco em mudanças de estilo de vida 
                que permitem resultados duradouros.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Activity className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Hipertensão Arterial
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Controle e acompanhamento da pressão arterial com foco na prevenção de complicações 
                cardiovasculares. Tratamento personalizado com orientações sobre estilo de vida e 
                medicação quando necessário.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Thermometer className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Doenças da Tireoide
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Diagnóstico e tratamento de condições da tireoide. Equilíbrio hormonal para 
                restabelecer bem-estar e energia.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Apple className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Orientação Nutricional
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Acompanhamento nutricional personalizado, com foco em alimentação saudável e 
                sustentável. Orientações específicas para cada condição de saúde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
