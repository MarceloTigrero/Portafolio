import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Robot para diagnóstico de tuberías",
    description: "Diseño de un robot autónomo para inspección y diagnóstico de tuberías de agua potable en Santa Elena. El sistema integra sensores acústicos, mapeo y localización para detectar fugas y generar informes detallados.",
    tags: ["Robótica", "Sensores", "Automatización", "Diseño 3D", "Análisis de Datos"],
    image: "https://idear.espol.edu.ec/sites/default/files/posters/edicion_x/Portada_RT.png",
    githubUrl: "https://github.com/MarceloTigrero/RobotTuberias"
  },
  {
    id: 2,
    title: "Sistema de Recolección de Datos Plantares",
    description: "Programa especializado en la recolección y segmentación de datos para machine learning, enfocado en el análisis de movimientos del pie. Incluye previsualización de imágenes monocromáticas y captura de señales musculares.",
    tags: ["Machine Learning", "Procesamiento de Señales", "Python", "Análisis de Datos"],
    image: "https://raw.githubusercontent.com/MarceloTigrero/Portafolio/refs/heads/gh-pages/documents/projectspng/DatosPlantares.png",
    githubUrl: "https://github.com/MarceloTigrero/DatosPlantares"
  },
  {
    id: 3,
    title: "Servicio de Transcripción",
    description: "Servicio backend en Python utilizando Docker que convierte audio a texto. Implementa una arquitectura limpia con servicios de transcripción, conversión de formatos y manejo de archivos.",
    tags: ["Python", "Docker", "Flask", "OpenAI-Whisper", "API REST","Backend"],
    image: "https://www.protranslate.net/blog/wp-content/uploads/2020/01/blog-1140x600-1.png",
    githubUrl: "https://github.com/MarceloTigrero/Transcribe_Service_Open"
  },
  {
    id: 4,
    title: "To-Do List PWA",
    description: "Aplicación web progresiva (PWA) para gestión de tareas, permitiendo enlistar y marcar actividades completadas.",
    tags: ["HTML", "CSS", "JavaScript", "PWA", "Frontend"],
    image: "https://raw.githubusercontent.com/MarceloTigrero/To-Do-List/refs/heads/main/todo-list-mobile.png",
    githubUrl: "https://github.com/MarceloTigrero/To-Do-List",
    liveUrl: "https://marcelotigrero.github.io/To-Do-List/"
  }
];

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = projects.filter(project => {
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => project.tags.includes(tag));
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTags && matchesSearch;
  });

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Destacados</h2>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="w-full max-w-md mx-auto block px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTags(prev => 
                  prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                )}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white">
                      <Github size={20} />
                      <span>Código</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;