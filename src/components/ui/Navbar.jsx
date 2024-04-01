import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex px-5 items-center justify-between xl:justify-start w-full h-[10vh] z-50">
        <a href="" className="flex items-center w-1/2 gap-1 text-2xl font-bold text-primary">
          <img
            src="logo.png"
            className="w-[40px] h-[40px] object-cover"
          />
          <p className="hidden xl:block">
            Nodect
          </p>
        </a>
      <nav className={`fixed bg-bgbody w-[80%] xl:w-full h-full ${showMenu ? "left-0":"-left-full"}
          top-0 xl:static flex flex-col xl:flex-row items-center justify-center xl:justify-end xl:p-5 gap-10 xl:gap-20 
          transition-all duration-500`}>
          <a href="#" className="text-white">
            Saber más 
          </a>
          <a href="#" className="text-white">
            FAQ
          </a>
          <a href="#" className="text-white">
            Contacto 
          </a>
        </nav>
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl xl:hidden text-primary"
        >
          {showMenu ? <IoClose /> : <IoMenu />} 
        </button>
    </header>
  )
}

export default Navbar