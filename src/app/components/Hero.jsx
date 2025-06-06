"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import Link from "next/link";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);
  return (
    <div className="">
      <div className=" md:px-24 px-8 py-24 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2" data-aos="fade-up">
            <div className="lg:max-w-md">
              <h1 className="text-5xl font-bold text-gray-900  lg:text-6xl">
                Best place to choose <br /> your{" "}
                <span className="text-blue-500 ">Job</span>
              </h1>

              <p className="mt-3 text-gray-600 text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae?
              </p>

              <button className="w-1/2 px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <Link href={'find-jobs'}>
                  Find Job
                </Link>
              </button>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              className="w-full h-full lg:max-w-3xl"
              src="hero_image.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
