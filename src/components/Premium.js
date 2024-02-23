import React from "react";
import DishCard from "./DishCard";
import premium1 from '../assets/premium1.jpg'
import premium2 from '../assets/premium2.jpg'
import premium3 from '../assets/premium3.jpg'

const Premium = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 dark:text-[#f4f4f4]">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10"> Premium Dishes</h1>
      <div className="flex flex-wrap justify-center gap-8">
        <DishCard img={premium1} title="Shrimp" price="$34.99" />
        <DishCard img={premium2} title="Crab Meat" price="$34.99" />
        <DishCard img={premium3} title="Caviar" price="$34.99" />

      </div>
    </div>
  );
};

export default Premium;
