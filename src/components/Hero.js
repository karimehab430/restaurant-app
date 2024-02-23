import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center px-5 bg-cover bg-no-repeat bg-center text-left"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/hero-f2.jpg)` }}
    >
      <div className="text-[#f4f4f4] ml-8 w-full lg:w-2/3 space-y-5">
        <h1 className="lg:text-5xl text-3xl font-semibold mb-4 w-[450px]">
          Perfect Ambience & Best Quality Food
        </h1>
        <p className="text-[#f4f4f4]/50 font-semibold lg:w-96 w-56">
          Officia pariatur Lorem ea quis. Elit exercitation consectetur deserunt
          est cupidatat. Veniam laborum id proident dolor aliquip nostrud sit
          incididunt mollit sint ipsum proident pariatur duis.
        </p>
        <div>
          <Link to="dishes" spy={true} smooth={true} duration={500}>
            <button className="text-zinc-950 font-medium px-5 py-2 bg-[#f4f4f4] transition-all border-2 rounded-md mt-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
