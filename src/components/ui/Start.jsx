
function Start() {
  return (
    <div className="flex-col my-40">
      <div className="flex flex-col justify-center gap-2 text-4xl font-bold text-center md:flex-row md:text-5xl">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl text-primary">
          Únete a nuestra comunidad
        </h1>
      </div>
      <div className="flex justify-center
      md:w-[80%] md:ml-[50%] md:-translate-x-[50%] xl:w-full xl:ml-0  xl:-translate-x-0">
        <p className="px-5 mt-5 text-lg text-center text-white 2xl:px-10 md:text-xl md:px-0 md:w-4/5">
          Forma parte de la comunidad de Nodect, dónde te ayudaremos en este
          camino tan apasionante y complicado al mismo tiempo que es el
          aprendizaje.
        </p>
      </div>
      <div className="px-5 md:w-[60%] mx-auto mt-20">
        <form
          action="#"
          method="POST"
          className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-2"
        >
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            className="w-full px-2 py-2 text-white border-b border-white outline-none bg-bgbody"
            required
          />
          <button
            type="submit"
            className="w-full px-8 py-2 text-lg text-center text-white rounded-lg bg-primary md:w-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Start;
