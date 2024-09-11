import React, { useState } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

function Header() {
  const [ isMenuOpen, setIsMenuOpen ]  = useState(false);

  // function to toggle the menu open & close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //menu links content
  const navItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Why Us",
      path: "whyus",
    },
    {
      link: "Shop",
      path: "shop",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];
  return (
    <nav className="w-full bg-gray-600 flex justify-between items-center lg:px-16 px-6 py-4 sticky top-0 z-50">
      <h1 className="text-white md:text-5xl text-4xl font-Lobster">
        Icy<span className="text-red-600 italic ml-2">Forever</span>
      </h1>
      <ul className="lg:flex justify-center items-center gap-6 hidden">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-full hover:bg-red-600 hover:text-white text-[15px]"
            to={path}
            spy={true}
            offset={true}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      <buton className="bg-red-600 px-10 py-3 text-white rounded-full font-bold cursor-pointer hover:text-black hover:bg-white  transform hover:scale-105 transition-transform duration-300 lg:flex hidden">
        ORDER NOW
      </buton>

      {/* mobile menu */}
      <div
        className="flex justify-between items-center lg:hidden mt-3"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark className="text-white  text-3xl cursor-pointer" />
          ) : (
            <FaBars className="text-white  text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } w-full h-fit bg-red-600 p-4 absolute top-[72px] left-0`}
        onClick={closeMenu}
      >
        <ul className="flex flex-col justify-center items-center gap-2 w-full">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="text-white uppercase font-semibold cursor-pointer p-2 rounded-lg hover:text-black hover:bg-gray-200 w-full text-center"
              to={path}
              spy={true}
              offset={true}
              smooth={true}
            >
              {link}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
