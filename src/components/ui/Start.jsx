import React from "react";

function Start() {
  return (
    <div className="flex-col mt-5 mb-40">
      <div className="flex flex-col justify-center gap-2 text-4xl font-bold text-center md:flex-row md:text-5xl">
        <h1 className="text-4xl text-primary font-bold mb-4">
          Únete a nuestra comunidad
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="px-5 mt-5 text-lg text-center text-white md:px-0 md:w-4/5">
          Forma parte de la comunidad de Nodect, dónde te ayudaremos en este
          camino tan apasionante y complicado al mismo tiempo que es el
          aprendizaje.
        </p>
      </div>
      <div class="container mx-auto px-4 md:px-10 py-12">
        <form
          action="#"
          method="POST"
          class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2"
        >
          <input
            type="email"
            name="email"
            placeholder="Tu correo electrónico"
            class="w-full px-2 py-2 text-white border-b border-white outline-none bg-bgbody"
            required
          />
          <button
            type="submit"
            class="w-full px-8 py-2 text-lg text-center text-white rounded-lg bg-primary md:w-auto"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Start;
