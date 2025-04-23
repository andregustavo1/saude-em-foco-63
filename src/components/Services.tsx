
import React from 'react';
import { Weight, Activity, Thermometer, Pill, Apple } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Tratamentos Especializados</h2>
        
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
                Gerenciamento eficaz de pacientes com diabetes, com monitoramento personalizado, 
                ajuste de tratamento e orientações para controle glicêmico. Prevenção de 
                complicações e melhoria da qualidade de vida.
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
                nutricional e tratamento específico. Foco em mudanças de estilo de vida 
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
                Saúde da Tireoide
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Diagnóstico e tratamento de condições da tireoide. Reposição hormonal 
                e equilíbrio para restabelecer bem-estar e energia.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Apple className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Reposição de Vitaminas e Nutrição Pós-Bariátrica
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Acompanhamento nutricional personalizado, com reposição de vitaminas e minerais, 
                foco em alimentação saudável e adaptada após cirurgia bariátrica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
