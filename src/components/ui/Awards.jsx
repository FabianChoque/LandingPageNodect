const Awards = () => {
  return (
    <div className="pt-20 mt-20 mb-20">
      <div className="flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="text-4xl font-bold md:text-5xl text-primary">
          Premios disponibles
        </h1>
        <p className="px-5 text-lg text-white md:px-0 md:w-3/5">
          Habrá dos premios en efectivo para los dos primeros lugares y{" "}
          <strong>
            todos los participantes serán observados por empresas nacionales e
            internacionales en búsqueda de talento que podrán ofrecerles un
            lugar en sus equipos
          </strong>
        </p>
      </div>
      <div className="flex flex-col flex-wrap justify-between gap-10 px-20 mt-20 md:flex-row">
        <div className="text-center flex flex-col items-center justify-center md:text-left md:w-[30%] xl:w-1/4 ">
          <img
            src="efectivo.png"
            className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0 "
          />
          <h2 className="pt-2 text-2xl font-bold text-primary ">
            Premios en efectivo
          </h2>
          <p className="pt-2 text-lg text-white text-center">
            De 300.000$ para el primer puesto y 100.000$ para el segundo
          </p>
        </div>

        <div className="text-center flex flex-col items-center justify-center  md:text-left md:w-[30%] xl:w-1/4">
          <img
            src="reclutamiento.png"
            className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
          />
          <h2 className="pt-2 text-2xl font-bold text-primary text-center">
            Reclutamiento
          </h2>
          <p className="pt-2 text-lg text-white text-center">
            Observarán tu desempeño empresas internacionales en búsqueda de
            talento{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Awards;
