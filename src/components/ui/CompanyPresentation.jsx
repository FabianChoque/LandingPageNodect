const scrollToDestination = () => {
  const destination = document.getElementById("info");
  destination.scrollIntoView({ behavior: "smooth" });
};
const CompanyPresentation = () => {
  return (
    <section className="mt-10 min-h-[90vh] md:min-h-[60vh] md:bg-blue-200 xl:bg-red-300 2xl:bg-green-400 xl:min-h-[30vh]">
      <div className="flex flex-col mt-5 xl:gap-20 xl:flex-row">
        <div className="flex flex-col justify-center gap-2 text-center xl:w-[60%]">
          <h1 className="text-4xl font-bold text-white md:text-5xl text-bold">
            Dedícate a aprender
          </h1>
          <h4 className="text-4xl font-bold md:text-5xl text-bold text-primary">
            Nosotros nos ocupamos del resto
          </h4>
          <p className="px-5 mt-5 text-lg text-center text-white md:text-xl">
            Buscamos generar un giro en la forma en que aprendemos y nos
            conectamos al mercado laboral, acompañanos en esta aventura!
          </p>

          <div className="flex flex-col items-center justify-center gap-4 px-10 pt-5 md:flex-row md:px-0">
            <a
              onClick={scrollToDestination}
              className="w-full px-8 py-2 text-lg text-center text-white rounded-lg cursor-pointer md:w-auto bg-primary"
            >
              Conócenos
            </a>
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <img
            src="banner2.png"
            className="object-cover w-[35vh] md:w-[60%] md:h-[100%] lg:w-[25vh] xl:w-[90%] xl:h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyPresentation;
