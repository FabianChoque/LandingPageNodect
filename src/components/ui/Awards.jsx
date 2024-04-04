const Awards = () => {
  return (
    <div className="pt-20 mt-20 mb-20">
        <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h1 className="text-4xl font-bold md:text-5xl text-primary" >Premios disponibles</h1>
            <p className="px-5 text-lg text-white md:px-0 md:w-3/5" >Mediante nuestra red de empresas interesadas en talentos te conectaremos con oportunidades en diversos sectores y empresas para que puedas elegir la que mejor se adapte a ti</p>
        </div>
        <div className="flex flex-col flex-wrap justify-between gap-10 px-20 mt-20 md:flex-row">
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4 ">
                <img src="efectivo.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0 " />
                <h2 className="pt-2 text-2xl font-bold text-primary ">Premios en efectivo</h2>
                <p className="pt-2 text-lg text-white">De 300.000$ para el primer puesto y 100.000$ para el segundo</p>
            </div>
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4">
                <img src="efectivo.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0" />
                <h2 className="pt-2 text-2xl font-bold text-primary">Certificaciones</h2>
                <p className="pt-2 text-lg text-white">Actualizado, de utilidad y aplicación en el mercado actualmente</p>
            </div>
            <div className="text-center md:text-left md:w-[30%] xl:w-1/4">
                <img src="efectivo.png" className="h-[80px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0" />
                <h2 className="pt-2 text-2xl font-bold text-primary">Posible reclutamiento</h2>
                <p className="pt-2 text-lg text-white">Observarán tu desempeño empresas internacionales en búsqueda de talento </p>
            </div>
      </div>
    </div>
  )
}

export default Awards