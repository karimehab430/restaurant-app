import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoRestaurant } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import Switcher from "./DarkSwitcher";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <div className="fixed w-full dark:text-[#f4f4f4] text-zinc-950 lg:bg-[#f4f4f4]">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#f4f4f4] dark:bg-[#202020] shadow-md">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <div className="flex flex-row items-center cursor-pointer">
              <span>
                <IoRestaurant size={32} />
              </span>
              <h1
                className="text-3xl font-semibold ml-2"
                style={{ fontFamily: "Regad FREE" }}
              >
                Restaurant
              </h1>
            </div>
          </Link>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10 px-3 py-2 rounded-md transition-all cursor-pointer"
            >
              Home
            </Link>
            <div className="relative group">
              <div
                className={`flex items-center gap-1 hover:bg-[#ddd]/10 rounded-md ${
                  dropdownActive ? "bg-[#ddd]" : ""
                }`}
                onClick={toggleDropdown}
              >
                <Link
                  to="dishes"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="p-2 rounded-md transition-all cursor-pointer"
                >
                  Dishes
                </Link>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              <ul
                className={`absolute py-2 ${
                  dropdownActive ? "block" : "hidden"
                } group-hover:block bg-[#f4f4f4] dark:bg-[#202020] text-zinc-950 dark:text-[#f4f4f4] border
                 border-gray-400/20 rounded-lg p-2`}
              >
                <li className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10  rounded-md w-full">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block w-full p-2 transition-all cursor-pointer"
                    onClick={closeMenu}
                  >
                    Spicy
                  </Link>
                </li>
                <li className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10  rounded-md w-full">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block w-full p-2 transition-all cursor-pointer"
                  >
                    Tasty
                  </Link>
                </li>
                <li className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10  rounded-md w-full">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block w-full p-2 transition-all cursor-pointer"
                  >
                    Delicious
                  </Link>
                </li>
                <li className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10  rounded-md w-full">
                  <Link
                    to="dishes"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="block w-full p-2  transition-all cursor-pointer"
                  >
                    Crispy
                  </Link>
                </li>
              </ul>
            </div>
            <Link
              to="premium"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10 px-3 py-2 rounded-md transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10 px-3 py-2 rounded-md transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:bg-[#ddd] dark:hover:bg-[#ddd]/10 px-3 py-2 rounded-md transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <button className="text-[#f4f4f4] px-5 py-2 border-2 bg-blue-500 transition-all rounded-md dark:border-none">
              Log in
            </button>
            <Switcher />
          </nav>

          <div className="md:hidden flex items-center gap-x-5">
            <Switcher />
            {menu ? (
              <AiOutlineClose size={25} onClick={handleClick} />
            ) : (
              <TfiMenu size={25} onClick={handleClick} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col justify-center items-center bg-sky-700 text-[#f4f4f4] left-0 top-20
           font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:bg-[#ddd]/20 transition-all cursor-pointer h-16 w-full border-slate-900"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="dishes"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:bg-[#ddd]/20 transition-all cursor-pointer h-16 w-full border-slate-900"
            onClick={closeMenu}
          >
            Dishes
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:bg-[#ddd]/20 transition-all cursor-pointer h-16 w-full border-slate-900"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:bg-[#ddd]/20 transition-all cursor-pointer h-16 w-full border-slate-900"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:bg-[#ddd]/20 transition-all cursor-pointer h-16 w-full border-slate-900"
            onClick={closeMenu}
          >
            Reviews
          </Link>
          <button className="text-[#f4f4f4] py-2 w-48 bg-blue-500 transition-all rounded-md">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
