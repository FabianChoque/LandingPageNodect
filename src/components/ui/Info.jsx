import React from "react";

const Info = () => {
  return (
    <div className="px-5 mb-20 md:pt-20 md:px-20">
      <div className="flex flex-col items-center justify-between mb-20 md:flex-row">
        <div className="md:w-[40%]">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl">
            Resuelve proyectos
          </h2>
          <p className="text-lg text-white text-justify">
            Te ofrecemos proyectos del mundo real, diseñados para que puedas
            practicar y mejorar tus habilidades en un entorno profesional
            simulado. ¡Las empresas de diversos sectores están observando y
            listas para contratarte!
          </p>
        </div>
        <div className="">
          <img
            src="proyectos.png"
            className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mb-20 md:flex-row-reverse">
        <div className="md:w-[40%]">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl">
            Trabajo en equipo
          </h2>
          <p className="text-lg text-white text-justify">
            Trabajarás en equipos multidisciplinarios, resolverás problemas
            reales y aprenderás a colaborar eficazmente en un entorno
            profesional
          </p>
        </div>
        <div className="">
          <img
            src="equipo.png"
            className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mb-20 md:flex-row">
        <div className="md:w-[40%]">
          <h2 className="mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl">
            Aplica tecnología
          </h2>
          <p className="text-lg text-white text-justify">
            UTiliza las herramientas, tecnologías y metodologías que más te
            gusten y te ayuden a resolver el problema de la mejor manera y
            demostrar tu talento
          </p>
        </div>
        <div className="">
          <img
            src="stack.png"
            className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
