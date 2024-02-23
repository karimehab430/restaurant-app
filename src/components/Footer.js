import React from "react";
import { Link } from "react-scroll";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-zinc-950 text-[#f4f4f4] mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Restaurant App</h1>
          <p className="text-sm text-gray-100/50">
            Satisfy your cravings by getting the best quality food from us and
            enjoy with your beloved ones. Customers satisfaction is our first
            priority. Come and have a best experience in our place.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer"
              to="dishes"
            >
              Dishes
            </Link>
            <Link
              className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer"
              to="about"
            >
              About
            </Link>
            <Link
              className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer"
              to="reviews"
            >
              Reviews
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <div className="flex flex-col gap-2">
            <Link
              className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer"
              to="dishes"
            >
              Premium Menu
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium pb-4 pt-5 md:pt-0">Contact Us</h1>
          <div className="flex flex-col gap-2">
            <a
              className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer"
              href="mailto:karimeahn@gmail.com"
            >
              Email
            </a>
            <div className="hover:text-[#f4f4f4] text-[#f4f4f4]/50 transition-all cursor-pointer">
              +14 567 852 663
            </div>
            <div className="flex flex-row gap-4">
              <BsFacebook size={23} />
              <BsInstagram size={23} />
              <RiTwitterXFill size={23} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p className="text-center p-4">
            Developed by
            <a
              href="https://github.com/karimehab430"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-medium mx-1"
            >
              Karim Ehab.
            </a>
            Copyright &copy; Restaurant App 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
