import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contacto</h2>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href="https://github.com/MarceloTigrero" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Github size={32} />
            <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/marcelo-tigrero/" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:tigreromarcelo@gmail.com" target="_blank" rel="noopener noreferrer" title="Trabaje conmigo"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Mail size={32} />
            <span>Email</span>
          </a>
          
          <a href="/documents/MarceloTigrero.pdf" 
            title="Descargar CV" download="MarceloTigrero_CV.pdf"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <Download size={32} />
            <span>Descargar CV</span>
          </a>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">¿Interesado en trabajar juntos?</h3>
          <p className="text-gray-400 mb-6">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones.
            No dudes en contactarme para discutir posibles proyectos.
          </p>
          <a href="mailto:tigreromarcelo@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Enviar mensaje
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;