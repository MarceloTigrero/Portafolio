import React, { useState } from 'react';
import { Award, ChevronDown, ChevronUp } from 'lucide-react';

const allCertifications = [
  {
    id: 1,
    name: "Prevencion de Riesgos de Trabajos en Caliente y Soldadura",
    issuer: "MinisteriodeTrabajo",
    date: "09/03/24",
    credential: "PRTCS-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/MinisteriodeTrabajo_PrevenciondeRiesgosdeTrabajosenCalienteySoldadura_09_03_24.pdf"
  },
  {
    id: 2,
    name: "Prevencion en Trabajo de Alturas",
    issuer: "MinisteriodeTrabajo", 
    date: "09/03/24",
    credential: "PTA-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/MinisteriodeTrabajo_PrevenciondeTrabajodeAlturas_09_03_24.pdf"
  },
  {
    id: 3,
    name: "Trabajo en Espacios Confinados",
    issuer: "MinisteriodeTrabajo",
    date: "09/03/24",
    credential: "TEC-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/MinisteriodeTrabajo_TrabajoenEspaciosConfinados_09_03_24.pdf"
  },
  {
    id: 4,
    name: "Bloodborne Pathogens Training",
    issuer: "RedCross",
    date: "02/29/24",
    credential: "BPT-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/RedCross_bloodbornepathogenstraining_2_29_24.pdf"
  },
  {
    id: 5,
    name: "Lifeguard",
    issuer: "RedCross",
    date: "02/29/24", 
    credential: "LG-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/RedCross_lifeguardeep_2_29_24.pdf"
  },
  {
    id: 6,
    name: "Techstars Startup Weekend Guayaquil 2024",
    issuer: "i3lab",
    date: "09/01/24",
    credential: "TSWG-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/i3lab_TechstarsStartupWeekendGuayaquil2024_09_01_24.pdf"
  },
  {
    id: 7,
    name: "Prevencion de Riesgo Laboral",
    issuer: "MinisteriodeTrabajo",
    date: "08/06/24",
    credential: "PRL-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/MinisteriodeTrabajo_PrevenciondeRiesgoLaboral_08_06_24.pdf"
  },
  {
    id: 8,
    name: "Primeros Auxilios",
    issuer: "Cenforpro",
    date: "08/06/24",
    credential: "PA-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/Cenforpro_PrimerosAuxilios_08_06_24.pdf"
  },
  {
    id: 9,
    name: "Prevencion de Riesgos Seguridad Industrial y Salud Ocupacional",
    issuer: "Cenforpro",
    date: "08/06/24",
    credential: "PRSO-2024",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/Cenforpro_PrevenciondeRiesgosSeguridadIndustrialySaludOcupacionalenelSectorIndustrialylaConstruccion_08_06_24.pdf"
  },
  {
    id: 10,
    name: "Hackathon",
    issuer: "Safe&SoundCitiesCuenca",
    date: "10/14/23",
    credential: "HACK-2023",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/Safe&SoundCitiesCuenca_Hackathon_10_14_23.pdf"
  },
  {
    id: 11,
    name: "ISO/IEC 27001 Internal Auditor",
    issuer: "Credly",
    date: "07/28/22",
    credential: "ISO27001-2022",
    link: "https://www.credly.com/badges/a6e13559-5070-4f50-85eb-f7a8e19f4860?source=linked_in_profile"
  },
  {
    id: 12,
    name: "Elements of AI",
    issuer: "University of Helsinki",
    date: "04/16/20",
    credential: "EOA-2020",
    link: "https://certificates.mooc.fi/validate/mvvkownwvk"
  },
  {
    id: 13,
    name: "Python Core",
    issuer: "Solo Learn",
    date: "03/09/20",
    credential: "PC-2020",
    link: "https://www.sololearn.com/es/certificates/CT-CLZFGKDG"
  },
  {
    id: 14,
    name: "Java Foundation",
    issuer: "ORACLE",
    date: "01/24/20",
    credential: "JF-2020",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/ORACLE_JavaFundation_01_24_20.pdf"
  },
  {
    id: 15,
    name: "Java",
    issuer: "Solo Learn",
    date: "12/10/19",
    credential: "JAVA-2019",
    link: "https://www.sololearn.com/es/certificates/CT-SBGMBA9P"
  },
  {
    id: 16,
    name: "Learn to Learn",
    issuer: "Coursera",
    date: "07/16/20",
    credential: "L2L-2020",
    link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~NXBJVCMPBHPX/CERTIFICATE_LANDING_PAGE~NXBJVCMPBHPX.jpeg"
  },
  {
    id: 17,
    name: "English Program",
    issuer: "MultiBilingue",
    date: "11/01/17",
    credential: "EP-2017",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/MultiBilingue_EnglishProgram_11_01_17.pdf"
  },
  {
    id: 18,
    name: "Capacitacion Tecnica Automotriz",
    issuer: "UICSA",
    date: "12/10/17",
    credential: "CTA-2017",
    link: "https://github.com/MarceloTigrero/Portafolio/blob/main/certificados/UICSA_CapacitacionTecnicaAutomotriz_12_10_17.pdf"
  }
];
const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? allCertifications : allCertifications.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-gray-800/50" id="certifications">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Certificaciones</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCertifications.map(cert => (
            <a 
              key={cert.id} 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center hover:transform hover:scale-105 transition-transform"
            >
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-400 mb-2">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
              <p className="text-gray-600 text-xs mt-2">Credential: {cert.credential}</p>
            </a>
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

export default Certifications;