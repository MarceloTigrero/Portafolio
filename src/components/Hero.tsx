import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative flex flex-col justify-center items-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
        MARCELO TIGRERO 
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
          <span className="text-2xl md:text-4xl">
            Ingeniero Mecatrónico | Full Stack Developer | Maestría en Energías
            Renovables
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Transformando el Futuro: Creando soluciones innovadoras donde la
          tecnología y la sostenibilidad se encuentran
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Especializado en{" "}
          <span className="font-bold">diseño de sistemas integrados</span>,{" "}
          <span className="font-bold">aplicaciones web de vanguardia</span>,{" "}
          <span className="font-bold">ingeniería mecatrónica</span>,{" "}
          <span className="font-bold">desarrollo full stack</span> y{" "}
          <span className="font-bold">energías renovables</span>.
        </p>

      </div>

      <div 
        onClick={() => scrollToSection('projects')}
        className="absolute bottom-8 animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={32} className="text-gray-400" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-xl" />
    </section>
  );
};

export default Hero;