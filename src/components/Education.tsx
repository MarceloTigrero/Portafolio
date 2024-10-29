import React from 'react';

const education = [
  {
    id: 1,
    degree: "Ingeniería Mecatrónica",
    institution: "Escuela Superior Politecnica del Litoral",
    period: "2018 - 2023",
    description: "Ingeniero con conocimientos avanzados en sensores, actuadores y sistemas embebidos para aplicaciones industriales. Experiencia en el diseño e implementación de soluciones automatizadas que optimizan la eficiencia y productividad. Formación acreditada por EUR-ACE y Senescyt.",
    link: "https://www.fimcp.espol.edu.ec/es/grado/mecatronica"
  },
  {
    id: 2,
    degree: "Maestría en Energías Renovables",
    institution: "Tech Global University Techtitute",
    period: "2024 - 2026",
    description: "Analizar, Seleccionar tecnologías y fabricantes para sistemas de energías renovables, optimizando costos y aplicaciones. Gestionar las fases necesarias para la viabilidad e implementación de proyectos. Formación acreditada con RVOE y Apostille de la Haya.",
    link: "https://www.techtitute.com/ec/escuela-de-negocios/maestria/maestria-energias-renovables"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Educación</h2>
        
        <div className="grid gap-8">
          {education.map(edu => (
            <div key={edu.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors">
              
              <div className="flex justify-between items-start mb-4">
              
                <div>
                <a 
                    href={edu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {edu.degree}
                  </a>
                  
                  <p className="text-gray-400">{edu.institution}</p>
                
                </div>
                <span className="text-gray-500">{edu.period}</span>
              
              </div>
              <p className="text-gray-300">{edu.description}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;