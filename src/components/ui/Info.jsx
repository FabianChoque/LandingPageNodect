import React from 'react'

const Info = () => {
  return (
    <div className="px-5 mb-20 md:pt-20 md:px-20">
        <div className="flex flex-col items-center justify-between mb-20 md:flex-row">
            <div className="md:w-[40%]">
                <h2 className='mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl'>Generación de práctica y experiencia</h2>
                <p className="text-lg text-white">Te ofrecemos proyectos del mundo real, diseñados para que puedas practicar y mejorar tus habilidades en un entorno profesional simulado.¡Las empresas de diversos sectores están observando y listas para contratarte!</p>
            </div>
            <div className="">
                <img
                    src="stack.png"
                    className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
                />
            </div>
        </div>

        <div className="flex flex-col items-center justify-between mb-20 md:flex-row-reverse">
            <div className="md:w-[40%]">
                <h2 className='mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl'>Fomento del trabajo en equipo</h2>
                <p className="text-lg text-white">Trabajarás en equipos multidisciplinarios, resolverás problemas reales y aprenderás a colaborar eficazmente en un entorno profesional simulado</p>
            </div>
            <div className="">
                <img
                    src="stack.png"
                    className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
                />
            </div>
        </div>
        <div className="flex flex-col items-center justify-between mb-20 md:flex-row">
            <div className="md:w-[40%]">
                <h2 className='mb-5 text-4xl font-bold text-white md:mb-10 md:text-5xl'>Utiliza herramientas y metodologías</h2>
                <p className="text-lg text-white">Reunimos periódicamente el mejor contenido educativo de la web y lo organizamos en rutas de aprendizaje fáciles de seguir, las cuales se adaptan a ti</p>
            </div>
            <div className="">
                <img
                    src="stack.png"
                    className="pt-5 md:pt-0 object-cover w-[300px] md:w-[400px] ml-[50%] md:ml-0 -translate-x-[50%] md:-translate-x-0"
                />
            </div>
        </div>
        
    </div>
  )
}

export default Info