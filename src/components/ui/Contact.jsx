import { useForm } from "react-hook-form";
import { MdEmail, MdLocationPin, MdPhoneInTalk } from "react-icons/md";
import { FaCircle, FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {

    const {register, handleSubmit, formState: {errors}, reset, setValue}=useForm();

    const onSubmit = (data) => {
        console.log(data)

      }

  return (
    <section className='min-h-[160vh] md:min-h-[50vh] xl:min-h-[100vh] pt-10'>
        <div className='flex flex-col gap-5 text-center'>
            <h1 className='text-4xl font-bold md:text-5xl text-primary'>Contáctanos</h1>
            <p className='text-lg text-white'>¿Tienes alguna pregunta? Déjanos tu mensaje</p>
        </div>
        <div className='flex items-center justify-center pt-5'>
            <div className='grid md:w-3/4 px-5 xl:px-0 grid-cols-1 md:grid-cols-4 xl:grid-cols-10 md:h-[50vh] xl:h-[70vh]'>
                {/* Information */}
                <div className='relative px-2 py-2 md:col-span-2 xl:col-span-4'>
                    <div className='relative w-full h-full p-10 rounded-lg bg-primary'>
                        <div className="flex flex-col text-center xl:text-left">
                            <h2 className='text-2xl font-bold text-white'>Información de contacto</h2>
                            <p className='text-lg text-gray-300'>Canales directos de comunicación</p>
                        </div>
                        <div className="flex flex-col gap-10 pt-10">
                            <div className="flex flex-col items-center gap-5 text-lg text-white xl:flex-row">
                                <MdPhoneInTalk />
                                <p>38851780202</p> 
                            </div>
                            <div className="flex flex-col items-center gap-5 text-lg text-white xl:flex-row">
                                <MdEmail /> 
                                <p>nodect@gmail.com</p> 
                            </div>
                            <div className="flex flex-col items-center gap-5 text-lg text-center text-white xl:text-left xl:flex-row">
                                <MdLocationPin />
                                <div>
                                    <p>San Salvador de Jujuy, Jujuy</p>
                                    <p>Argetina</p>
                                </div>
                            </div>
                        </div>
                        <div className="z-10 flex justify-center w-full pt-10">
                            <div className="flex justify-between w-3/4 xl:w-1/2">
                                <a href="">
                                    <FaDiscord className="box-content p-2 text-2xl text-white rounded-full bg-bgbody" />
                                </a>
                                <a href="">
                                    <FaInstagram className="box-content p-2 text-2xl text-white rounded-full bg-bgbody" />
                                </a>
                                <a href="">
                                    <FaTiktok className="box-content p-2 text-2xl text-white rounded-full bg-bgbody" />
                                </a>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] bg-white opacity-25 rounded-tl-full"></div>
                    </div>

                </div>
                {/* Contact Form */}
                <form className='px-5 md:col-span-2 xl:col-span-6' onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-8 mt-10 xl:grid-cols-2">
                        <div>
                            <label className="font-medium text-white text-md">Nombre</label>
                            <input 
                                type="text" 
                                className="w-full py-2 text-white border-b border-white outline-none bg-bgbody"
                                {...register('name', { required: true })}
                                autoComplete="off"
                            />              
                            {errors.name && <span className="text-red-400"> *Este campo es requerido</span>}
                        </div>
                        
                        <div>
                            <label className="font-medium text-white text-md">Apellido</label>
                            <input 
                                type="text" 
                                className="w-full py-2 text-white border-b border-white outline-none bg-bgbody"
                                {...register('surname', { required: true })}
                                autoComplete="off"
                            />              
                            {errors.surname && <span className="text-red-400"> *Este campo es requerido</span>}
                        </div>
                        <div>
                            <label className="font-medium text-white text-md">Email</label>
                            <input 
                                type="email" 
                                className="w-full py-2 text-white border-b border-white outline-none bg-bgbody"
                                {...register('email', { required: true })}
                                autoComplete="off"
                            />              
                            {errors.email && <span className="text-red-400"> *Este campo es requerido</span>}
                        </div>
                        <div>
                            <label className="font-medium text-white text-md">Teléfono</label>
                            <input 
                                type="text" 
                                className="w-full py-2 text-white border-b border-white outline-none bg-bgbody"
                                {...register('phone', { required: true })}
                                autoComplete="off"
                            />  
                            {errors.phone && <span className="text-red-400"> *Este campo es requerido</span>}
                        </div>
                    </div>
                    <div className="pt-5">
                        <label className="block mb-2 font-medium text-white text-md">Mensaje</label>
                        <textarea 
                            rows="4" 
                            className="block w-full p-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg resize-none text-md" 
                            placeholder="Escriba su consulta aquí..."
                            {...register("message", {required: true})}
                            
                        />
                        {errors.message && <span className="text-red-400"> *Este campo es requerido</span>}
                    </div>
                    <div className="relative flex justify-center pt-5 xl:justify-end">
                        <button
                            type="submit"
                            className="absolute w-full px-6 py-2 font-semibold text-white rounded-lg xl:w-auto bg-primary"
                        >
                            Enviar
                        </button>

                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact