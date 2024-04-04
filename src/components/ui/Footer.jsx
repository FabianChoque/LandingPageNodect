import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-bgbody text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-2">
          {/* Nombre de la empresa o logo */}
          <Link to="/">
            <img src="logo.png" className="w-[40px] h-[40px] object-cover" />
          </Link>
        </div>
        <div className="mb-2">
          {/* Enlaces o navegación */}
          <nav className="flex gap-4 justify-center">
            <Link to="/bases" className="text-white">
              Saber más
            </Link>
            <Link to="/faqs" className="text-white">
              FAQ
            </Link>
            <Link to="/contacto" className="text-white">
              Contacto
            </Link>
          </nav>
        </div>
        <div>
          {/* Derechos de autor y redes sociales */}
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Nodect AI. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
