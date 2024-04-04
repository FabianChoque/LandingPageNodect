import React from 'react'
import { Link } from 'react-router-dom'
const Presentation = () => {

  return (
    <section className="min-h-[90vh] md:min-h-[60vh] xl:min-h-[90vh]">
        <div className="flex-col mt-5">
          <div className="flex flex-col justify-center gap-2 text-4xl font-bold text-center md:flex-row md:text-5xl">
            <h1 className="text-white">Soluciones <span className="underline decoration-primary">creativas</span></h1>
            <h1 className="text-primary">Futuros <span className="xl:overline">exitosos</span></h1>
          </div>
          <div className="flex justify-center">
            <p className="px-5 mt-5 text-lg text-center text-white md:px-0 md:w-3/5">Forma un equipo para resolver problemas reales, aplica diversas metodologías de trabajo y generá experciencia para vincularte de manera más efectiva al mercado laboral</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 px-10 pt-5 md:flex-row md:px-0">
            <a href="https://forms.gle/VsJUCVqQusW5j5cj9" className="w-full px-8 py-2 text-lg text-white rounded-lg md:w-auto bg-primary">
              Inscríbite
            </a>
            <Link to='/bases'><button className="w-full px-8 py-2 text-lg text-white border border-white rounded-lg md:w-auto">
              Saber más
            </button></Link>
          </div>
        </div>
        <div className="flex justify-center pt-3">
          <img
              src="banner.png"
              className="object-cover w-[40vh] pt-10 md:pt-0 md:w-[60%] md:h-[60%] xl:w-[30%] xl:h-[30%]"
            />
        </div>
    </section>
  )
}

export default Presentation