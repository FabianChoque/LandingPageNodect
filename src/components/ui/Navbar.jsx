import { useState } from "react";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { IoClose, IoMenu } from "react-icons/io5";

const navigation = [
  {
    title: "Bases",
    url: "/bases",
  },
  {
    title: "Empresa",
    url: "/company",
  },
  {
    title: "FAQ",
    url: "/faqs",
  },
  {
    title: "Contacto",
    url: "/contacto",
  },
];

const Navbar = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="flex px-5 items-center justify-between w-full h-[10vh] z-50">
      <Link
        to="/"
        className="flex items-center text-2xl font-bold text-primary"
      >
        <div className="flex items-center gap-1">
          <img src="logo.png" className="w-[40px] h-[40px] object-cover" />
          <p>Nodect</p>
        </div>
      </Link>
      <nav
        className={`${
          // openNavigation ? "hidden" : "block"
          openNavigation ? "flex" : "hidden"
        } fixed text-xl bg-bgbody pt-20 top-[5rem] left-0 right-0 bottom-0 flex-col items-center gap-10
        xl:static xl:flex xl:flex-row xl:pt-0 xl:gap-20 z-50`}
      >
        {navigation.map((item) => (
          <Link
            key={item.title}
            to={item.url}
            className="text-white transition-colors hover:text-primary"
            onClick={handleClick}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => toggleNavigation()}
        className="text-2xl xl:hidden text-primary"
      >
        {openNavigation ? <IoClose /> : <IoMenu />}
      </button>
    </header>
  );
};

export default Navbar;
