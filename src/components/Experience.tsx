import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const allExperiences = [
  {
    id: 1,
    role: "Asistente comercial",
    company: "Molinaro CIA. LTDA",
    location: "Guayaquil, Guayas, ECU",
    period: "Jun - Ago, 2024",
    description: "Gestión de cotizaciones, levantamiento de pedidos y control pre/post venta con énfasis en optimización logística.",
    achievements: [
      "Gestión integral de cotizaciones y pedidos",
      "Realización de visitas técnicas especializadas",
      "Cálculos y dimensionamiento de bandas transportadoras",
      "Optimización de procesos logísticos y reducción de costos"
    ]
  },
  {
    id: 2,
    role: "Socorrista - Servicio al huésped",
    company: "Seaworld",
    location: "Orlando, Florida, USA",
    period: "Feb - May, 2024",
    description: "Gestión de seguridad acuática y atención al cliente en entorno de alto rendimiento.",
    achievements: [
      "Prevención activa de accidentes en áreas acuáticas",
      "Identificación y mitigación de riesgos",
      "Provisión de atención médica inmediata",
      "Promoción de cultura de seguridad"
    ]
  },
  {
    id: 3,
    role: "Desarrollador full stack",
    company: "Escuela Superior Politecnica del Litoral",
    location: "Guayaquil, Guayas, ECU",
    period: "Oct - Dic, 2023",
    description: "Desarrollo e implementación de sistemas fullstack con tecnologías modernas.",
    achievements: [
      "Implementación de backend con Net Core 7 y IBM-DB2",
      "Desarrollo frontend con ReactJS y Flutter",
      "Colaboración efectiva en equipos multidisciplinarios",
      "Entrega exitosa de proyectos en tiempo establecido"
    ]
  },
  {
    id: 4,
    role: "Socorrista - Servicio al huésped",
    company: "Seaworld",
    location: "Orlando, Florida, USA",
    period: "Feb - May, 2023",
    description: "Gestión de seguridad acuática y atención al cliente en entorno de alto rendimiento.",
    achievements: [
      "Prevención activa de accidentes en áreas acuáticas",
      "Identificación y mitigación de riesgos",
      "Provisión de atención médica inmediata",
      "Promoción de cultura de seguridad"
    ]
  },
  {
    id: 5,
    role: "Asistente de Cátedra",
    company: "Escuela Superior Politecnica del Litoral",
    location: "Guayaquil, Guayas, ECU",
    period: "Apr 2022 - Feb 2023",
    description: "Soporte académico y técnico para estudiantes universitarios.",
    achievements: [
      "Aumento del 80% en la tasa de aprobación",
      "Soporte técnico personalizado a estudiantes",
      "Simplificación de conceptos complejos",
      "Desarrollo de material didáctico efectivo"
    ]
  },
  {
    id: 6,
    role: "Desarrollo de Proyectos",
    company: "Infortechcore Solution S.A.",
    location: "Guayaquil, Guayas, ECU",
    period: "Feb - May, 2022",
    description: "Desarrollo de sistemas embebidos y soluciones de comercio electrónico.",
    achievements: [
      "Desarrollo de sistema embebido con C, C#, Python y Node.js",
      "Implementación de pasarela de pago en sitio web",
      "Aumento del 15% en conversiones de ventas online",
      "Integración de protocolos HTTP y codificación AT"
    ]
  }
];


const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiences = showAll ? allExperiences : allExperiences.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-gray-800/50" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experiencia Profesional</h2>
        
        <div className="space-y-12">
          {displayedExperiences.map(exp => (
            <div key={exp.id} className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-8 mx-auto flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-colors"
        >
          {showAll ? (
            <>
              Ver menos <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Ver más <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default Experience;