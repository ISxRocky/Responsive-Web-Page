import React, { useEffect } from "react";
import frame from "../assets/frame.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Shop() {
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
      id="shop"
      className="w-full lg:px-[170px] px-[20px] lg:pt-[150px] pt-[60px] pb-[0px] bg-gray-300 flex lg:flex-row flex-col justify-center items-start"
    >
      <div className="lg:w-[50%] w-full">
        <img
          data-aos="slide-right"
          data-aos-delay="200"
          className="z-10"
          src={frame}
          alt="shop image"
        />
      </div>
      <div className="lg:w-[50%] w-full z-20 flex-flex-col justify-center items-start lg:gap-[100px] gap-[70px] lg:ml-[-50px] lg:mt-[-40px]">
        <div
          data-aos="slide-down"
          data-aos-delay="400"
          className="bg-red-600 p-12 lg:w-[70%] w-full flex flex-col justify-center items-start gap-5"
        >
          <h1 className="text-white text-[30px] font-Lobster">Online Shop</h1>
          <p className="text-white text-[50px] font-light leading-[50px] ">
            Ice Cream delivery to all over Kathmandu Valley
          </p>
        </div>
        <div
          data-aos="slide-up"
          data-aos-delay="400"
          className="bg-white lg:p-12 p-8 lg:w-[90%] w-full flex flex-col items-start gap-[45px] mt-10"
        >
          <h1 className="text-[65px] font-Lobster leading-[65px]">
            Ice Cream & Vegan Ice Cream
          </h1>
          <p className="text-[20px] text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            alias obcaecati nisi, magnam sit quo iste temporibus adipisci libero
            numquam.
          </p>
          <buton className="bg-red-600 px-10 py-3 text-white rounded-full font-semibold cursor-pointer">
            REACH US
          </buton>
        </div>
      </div>
    </div>
  );
}

export default Shop;
