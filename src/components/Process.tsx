
import React from 'react';
import { FileText, FlaskConical, ClipboardCheck, UserCheck } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="section-container bg-gradient-primary">
      <div className="animate-on-scroll text-white">
        <h2 className="section-title mb-16 text-white">Como Funciona o Atendimento</h2>
        <p className="text-center max-w-3xl mx-auto mb-20 text-white/90">
          Conheça nosso processo de atendimento, elaborado para proporcionar a melhor experiência e resultados para nossos pacientes
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2"></div>
          
          <div className="space-y-24 md:space-y-0 relative">
            {/* Step 1 */}
            <div className="md:flex items-center justify-between">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-12">
                <h3 className="text-2xl font-bold mb-3">Avaliação Inicial</h3>
                <p className="text-white/80">
                  Consulta detalhada para entender sua história médica, sintomas, 
                  hábitos e expectativas. Início de uma relação médico-paciente 
                  baseada em confiança e respeito.
                </p>
              </div>
              
              <div className="relative md:absolute left-1/2 -translate-x-1/2 mx-auto w-16 h-16 bg-white text-orange rounded-full flex items-center justify-center shadow-lg z-10 mb-8 md:mb-0">
                <FileText size={28} />
              </div>
              
              <div className="md:w-5/12 md:pl-12"></div>
            </div>
            
            {/* Step 2 */}
            <div className="md:flex items-center justify-between">
              <div className="md:w-5/12 md:text-right md:pr-12"></div>
              
              <div className="relative md:absolute left-1/2 -translate-x-1/2 mx-auto w-16 h-16 bg-white text-orange rounded-full flex items-center justify-center shadow-lg z-10 mb-8 md:mb-0">
                <FlaskConical size={28} />
              </div>
              
              <div className="md:w-5/12 mb-8 md:mb-0 md:pl-12">
                <h3 className="text-2xl font-bold mb-3">Exames Complementares</h3>
                <p className="text-white/80">
                  Solicitação de exames específicos para investigação detalhada 
                  e diagnóstico preciso. Análise cuidadosa de resultados para 
                  identificar desequilíbrios metabólicos e hormonais.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="md:flex items-center justify-between">
              <div className="md:w-5/12 mb-8 md:mb-0 md:text-right md:pr-12">
                <h3 className="text-2xl font-bold mb-3">Elaboração do Plano Terapêutico</h3>
                <p className="text-white/80">
                  Desenvolvimento de estratégia personalizada de tratamento, 
                  considerando suas necessidades, condições clínicas e objetivos. 
                  Explicação detalhada das opções terapêuticas.
                </p>
              </div>
              
              <div className="relative md:absolute left-1/2 -translate-x-1/2 mx-auto w-16 h-16 bg-white text-orange rounded-full flex items-center justify-center shadow-lg z-10 mb-8 md:mb-0">
                <ClipboardCheck size={28} />
              </div>
              
              <div className="md:w-5/12 md:pl-12"></div>
            </div>
            
            {/* Step 4 */}
            <div className="md:flex items-center justify-between">
              <div className="md:w-5/12 md:text-right md:pr-12"></div>
              
              <div className="relative md:absolute left-1/2 -translate-x-1/2 mx-auto w-16 h-16 bg-white text-orange rounded-full flex items-center justify-center shadow-lg z-10 mb-8 md:mb-0">
                <UserCheck size={28} />
              </div>
              
              <div className="md:w-5/12 mb-8 md:mb-0 md:pl-12">
                <h3 className="text-2xl font-bold mb-3">Acompanhamento Personalizado</h3>
                <p className="text-white/80">
                  Consultas de retorno para ajustes no tratamento, avaliação de 
                  progresso e suporte contínuo. Disponibilidade para esclarecimento 
                  de dúvidas e orientações.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
