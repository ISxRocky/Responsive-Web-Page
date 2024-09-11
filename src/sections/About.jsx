import React, { useEffect } from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 200,
        duration: 600,
        easing: "ease-in-sine",
      },
      []
    );
  });
  return (
    <div
      id="about"
      className="w-full lg:px-[120px] px-[20px] py-[80px] bg-gray-600 flex lg:flex-row flex-col justify-center items-start gap-[50px]"
    >
      <div
        className="flex flex-col justify-center items-start gap-[30px]"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <h1 className="text-white text-[45px] font-semibold font-Lobster">
          What We Do
        </h1>
        <p className="text-white text-[18px] text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
          aliquid consequuntur! Mollitia dignissimos consectetur blanditiis
          corrupti error expedita saepe ratione doloremque, aspernatur quibusdam
          dolores? Quasi itaque corporis quo labore eum.
        </p>
        <buton className="bg-red-600 px-10 py-3 text-white rounded-full font-semibold cursor-pointer">
          READ MORE
        </buton>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-4 w-full"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src={about1}
          alt="about image"
          className="rounded-full w-[150px]"
        />
        <h1 className="font-Lobster text-white text-3xl">Classic</h1>
        <p className="text-[18px] text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
          aliquam.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-4 w-full"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src={about2}
          alt="about image"
          className="rounded-full w-[150px]"
        />
        <h1 className="font-Lobster text-white text-3xl">Cakes</h1>
        <p className="text-[18px] text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
          aliquam.
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center gap-4 w-full"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <img
          src={about3}
          alt="about image"
          className="rounded-full w-[150px]"
        />
        <h1 className="font-Lobster text-white text-3xl">Vegan</h1>
        <p className="text-[18px] text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
          aliquam.
        </p>
      </div>
    </div>
  );
};

export default About;
