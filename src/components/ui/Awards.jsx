const Awards = () => {
  return (
    <div className="pt-20 mt-20 mb-20">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h1 className="text-4xl font-bold md:text-5xl text-primary" >Premios disponibles</h1>
            <p className="px-5 text-lg text-white md:px-0 md:w-3/5" >Mediante nuestra red de empresas interesadas en talentos te conectaremos con oportunidades en diversos sectores y empresas para que puedas elegir la que mejor se adapte a ti</p>
        </div>
        <div className="flex flex-col flex-wrap justify-between gap-10 px-20 mt-20 md:flex-row">
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4">
                <img src="config.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0" />
                <h2 className="pt-2 text-2xl font-bold text-primary">Proyectos prácticos</h2>
                <p className="pt-2 text-lg text-white">Que incluyen métodos, procedimientos y herramientas que se aplican en la actualidad en el mundo laboral</p>
            </div>
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4">
                <img src="academy.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0" />
                <h2 className="pt-2 text-2xl font-bold text-primary">Contenido educativo</h2>
                <p className="pt-2 text-lg text-white">Actualizado, de utilidad y aplicación en el mercado actualmente</p>
            </div>
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4">
                <img src="retro.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0" />
                <h2 className="pt-2 text-2xl font-bold text-primary">Retroalimentación</h2>
                <p className="pt-2 text-lg text-white">Recomendaciones, consejos y evaluaciones que te guien para mejorar y conectarte eficientemente</p>
            </div>
      </div>
    </div>
  )
}

export default Awards