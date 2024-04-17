import React from "react";
import nodes from "../../assets/nodes.png";
import project from "../../assets/project.png";
import company from "../../assets/company.png";

const features = [
  {
    image: nodes,
    title: "Gráficos de conocimiento",
    description:
      "Estructuramos y filtramos el contenido educativo para aprender eficientemente.",
  },
  {
    image: project,
    title: "Proyectos y desafíos",
    description: "Aplica los conocimientos y genera experiencia en grupo o indivualmente.",
  },
  {
    image: company,
    title: "Reclutamiento constante",
    description:
      "Diversas empresas están en constante observación en búsqueda de talento.",
  },
];

const Info = () => {
  return (
    <div id="info" className="px-5 mb-20 md:pt-20 md:px-20">
      {/*Nuestra misión*/}
      <div className="md:mb-40">
        <div className="flex flex-col justify-between mb-5 md:flex-row ">
          <div className="md:w-[50%]">
            <h1 class="text-3xl text-primary font-bold mb-4">Nuestra misión</h1>
            <p className="text-lg text-white text-justify">
              En Nodect, nuestra misión es{" "}
              <strong className="text-primary">
                optimizar los procesos educativos de las personas y su conexión
                con el mundo laboral.
              </strong>{" "}
              Estamos comprometidos con el rendimiento de la educación y la
              vinculación rápida y eficiente de las personas en empleos de
              calidad{" "}
              <strong className="text-primary">
                para afectar positivamente en sus posibilidades y su calidad de
                vida.
              </strong>
            </p>
          </div>
          <div className="">
            <img
              src="info1.png"
              className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
            />
          </div>
        </div>
        <div class="container mx-auto px-4 py-12">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 p-4 rounded-lg mb-4 md:mb-0">
              <h2 class="text-xl font-bold mb-2 text-primary text-center">
                Innovación Tecnológica
              </h2>
              <p class="text-white text-center font-bold">
                Creemos firmemente en la importancia de innovar en una nueva
                forma de concebir el proceso de aprendery cómo se recluta
                talento en el mundo empresarial.
              </p>
            </div>
            <div class="md:w-1/2 p-4 rounded-lg">
              <h2 class="text-xl font-bold mb-2 text-primary text-center">
                Enfoque en el usuario
              </h2>
              <p class="text-white text-center font-bold">
                Al centrarnos en las necesidades reales de nuestros usuarios,
                buscamos transformar ideas audaces en realidades tangibles que
                marquen una diferencia positiva en el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Nuestra visión*/}
      <div className="flex flex-col items-center justify-between mb-20 md:flex-row-reverse ">
        <div className="md:w-[40%]">
          <h2 className="text-3xl text-primary font-bold mb-4">
            Nuestra visión
          </h2>
          <p className="text-lg text-white text-justify">
            Aspiramos a ser reconocidos por nuestra capacidad para diseñar e
            implementar soluciones que mejoren la calidad educativa a unos
            estándares sin predecentes además de revolucionar la forma de
            captación de capital humano que tienen las empresas actualmente.
            <br />
            <strong className="text-primary">
              Pero siempre, con un valores claros:
            </strong>
          </p>

          <ul class="list-disc rounded-lg p-8">
            <li class="text-lg mb-4 font-medium text-primary">
              Compromiso con el cliente
            </li>
            <li class="text-lg mb-4 font-medium text-primary">
              Integridad y transparencia
            </li>
            <li class="text-lg font-medium text-primary">
              Innovación constante
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src="info2.png"
            className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
        </div>
      </div>

      <div className="flex-col mt-15 mt-40">
        <div className="flex flex-col justify-center gap-2 text-4xl font-bold text-center md:flex-row md:text-5xl">
          <h1 className="text-4xl text-primary font-bold mb-4">
            Cómo trabajamos
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-lg text-white text-center">
            Nos centramos en cambiar el proceso de aprendizaje, buscando la
            mejora constante en todos los procesos, y que el usuario encuentre
            un espacio dónde sea totalmente beneficiado en caso paso.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 mb-40">
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary rounded-lg shadow p-6 text-center flex-1 mx-2"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto w-20 h-20 md:w-30 md:h-30"
              />
              <h3 className="text-lg text-white md:text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm text-white md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
