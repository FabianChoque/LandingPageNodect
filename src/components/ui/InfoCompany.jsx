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
    description:
      "Aplica los conocimientos y genera experiencia en grupo o indivualmente.",
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
      <div className="xl:mb-20">
        <div className="flex flex-col justify-center xl:justify-between mb-5 xl:flex-row 
        md:w-[80%] md:ml-[50%] xl:w-full xl:ml-0 md:-translate-x-[50%] xl:-translate-x-0">
          <div className="xl:w-[50%]">
            <h1 className="mb-4 text-4xl font-bold text-center xl:text-left md:text-5xl text-primary">
              Nuestra misión
            </h1>
            <p className="text-lg text-center text-white xl:text-justify md:text-xl">
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
              className="pt-20 xl:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] xl:ml-0 -translate-x-[50%] xl:-translate-x-0"
            />
          </div>
        </div>
        <div className="container py-20 mx-auto xl:px-10">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="mb-10 rounded-lg md:w-[45%] md:mb-0">
              <h2 className="mb-2 text-4xl font-bold text-center text-primary">
                Innovación Tecnológica
              </h2>
              <p className="text-lg text-center text-white md:text-xl">
                Creemos firmemente en la importancia de innovar en una nueva
                forma de concebir el proceso de aprendery cómo se recluta
                talento en el mundo empresarial.
              </p>
            </div>
            <div className="p-4 rounded-lg md:w-[45%]">
              <h2 className="mb-2 text-4xl font-bold text-center text-primary">
                Enfoque en el usuario
              </h2>
              <p className="text-lg text-center text-white md:text-xl">
                Al centrarnos en las necesidades reales de nuestros usuarios,
                buscamos transformar ideas audaces en realidades tangibles que
                marquen una diferencia positiva en el mundo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Nuestra visión*/}
      <div className="flex flex-col items-center justify-between mb-10 
      xl:flex-row-reverse md:w-[80%] md:ml-[50%] xl:w-full xl:ml-0 md:-translate-x-[50%] xl:-translate-x-0">
        <div className="xl:w-[50%]">
          <h2 className="mb-4 text-4xl font-bold text-center xl:text-left md:text-5xl text-primary">
            Nuestra visión
          </h2>
          <div className="text-lg md:text-xl">
            <p className="text-center text-white xl:text-justify ">
              Aspiramos a ser reconocidos por nuestra capacidad para diseñar e
              implementar soluciones que mejoren la calidad educativa a unos
              estándares sin predecentes además de revolucionar la forma de
              captación de capital humano que tienen las empresas actualmente.
              <br />
              <strong className="text-primary">
                Pero siempre, con un valores claros:
              </strong>
            </p>
            <ul className="p-8 list-disc rounded-lg">
              <li className="font-medium xl:mb-4 text-primary">
                Compromiso con el cliente
              </li>
              <li className="font-medium xl:mb-4 text-primary">
                Integridad y transparencia
              </li>
              <li className="font-medium text-primary">Innovación constante</li>
            </ul>
          </div>
        </div>
        <div className="">
          <img
            src="info2.png"
            className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
        </div>
      </div>

      {/*Como trabajamos*/}
      <div className="flex-col mt-20
      md:w-[90%] md:ml-[50%] md:-translate-x-[50%] xl:w-full xl:ml-0  xl:-translate-x-0">
        <div className="flex flex-col justify-center gap-2 text-4xl font-bold text-center md:flex-row md:text-5xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-primary">
            Cómo trabajamos
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-lg text-center text-white md:px-10 md:text-xl 2xl:px-20">
            Nos centramos en cambiar el proceso de aprendizaje, buscando la
            mejora constante en todos los procesos, y que el usuario encuentre
            un espacio dónde sea totalmente beneficiado en caso paso.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="container px-4 mx-auto mt-20">
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-1 p-6 mx-2 text-center rounded-lg shadow bg-primary"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-20 h-20 mx-auto md:w-30 md:h-30"
              />
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {feature.title}
              </h3>
              <p className="pt-5 text-lg text-white md:text-xl">
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
