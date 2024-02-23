import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const DishCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-xl rounded-lg bg-slate-50 dark:bg-[#202020]">
      <img className="rounded-lg w-full h-64" src={props.img} alt=""></img>
      <div className="space-y-4">
        <h3 className="font-semibold text-xl text-center pt-5">
          {props.title}
        </h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarFill className="text-yellow-500" />
          <BsStarHalf className="text-yellow-500" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <button className="text-zinc-950 dark:text-[#f4f4f4] font-medium px-5 py-2 bg-[#f4f4f4] dark:bg-[#202020] 
          transition-all border-2 dark:border-[#f4f4f4] rounded-md">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
