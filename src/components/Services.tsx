
import React from 'react';
import { Weight, Activity, Thermometer, Pill, Vitamin } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section-container">
      <div className="animate-on-scroll">
        <h2 className="section-title mb-16">Especialidades e Tratamentos</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Weight className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Tratamento da Obesidade
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
                Controle do Diabetes
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
              <Thermometer className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Tratamento de Patologias Tireoidianas
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Diagnóstico e tratamento de condições da tireoide, como hipotireoidismo, 
                hipertireoidismo e nódulos tireoidianos. Equilíbrio hormonal para restabelecer 
                bem-estar e energia.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Pill className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Reposição Hormonal
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Terapia de reposição hormonal personalizada, com segurança e eficácia. 
                Alívio de sintomas da menopausa, andropausa e outras condições de desequilíbrio 
                hormonal.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center gap-6 card-hover">
            <div className="bg-orange/10 p-5 rounded-full flex-shrink-0 mx-auto md:mx-0">
              <Vitamin className="h-10 w-10 text-orange" />
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-2 text-brown text-center md:text-left">
                Suplementação de Vitaminas e Minerais
              </h3>
              <p className="text-gray-600 text-center md:text-left">
                Avaliação de deficiências nutricionais e recomendação de suplementação 
                adequada. Correção de carências para otimizar a saúde metabólica e 
                funcionamento do organismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
