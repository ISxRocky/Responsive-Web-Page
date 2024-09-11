import React from "react";
import { FaCopyright, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <div
        id="footer"
        className="w-full bg-gray-600 text-center text-white py-4 flex flex-row items-center justify-center gap-3"
      >
        <FaCopyright className="size-6" />
        <h1>Copyright 2024, ICE CREAM FOREVER, All Rights Reserved</h1>
      </div>

      {/* to navigate to hero section */}
      <div
        id="icon-box"
        className="bg-red-600 text-white p-3 rounded-full hover:bg-white hover:text-red-600 cursor-pointer fixed lg:bottom-6 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-[30px]" />
        </Link>
      </div>
    </>
  );
}

export default Footer;
