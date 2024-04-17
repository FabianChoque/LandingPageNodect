import React from "react";

const scrollToDestination = () => {
  const destination = document.getElementById('info');
  destination.scrollIntoView({ behavior: 'smooth' });
};
const CompanyPresentation = () => {
  return (
    <section className="my-10 min-h-[90vh] md:min-h-[60vh] xl:min-h-[70vh]">
      <div className="flex flex-col md:flex-row mt-5">
        <div className="flex flex-col justify-center gap-2 text-xl font-bold text-center md:text-3xl md:w-1/2">
          <h1 className="text-white">Dedícate a aprender</h1>
          <h4 className="text-primary">Nosotros nos ocupamos del resto</h4>
          <p className="px-5 mt-5 text-base text-center text-white  ">
            Buscamos generar un giro en la forma en que aprendemos y nos conectamos
            al mercado laboral, acompañanos en esta aventura!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 px-10 pt-5 md:flex-row md:px-0">
            <a onClick={scrollToDestination} className="w-full px-8 py-2 text-lg text-center text-white rounded-lg md:w-auto bg-primary">
              Conócenos
            </a>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 pt-3">
          <img
            src="banner2.png"
            className="object-cover w-[40vh] md:w-[100%] md:h-[100%] xl:w-[50%] xl:h-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyPresentation;
