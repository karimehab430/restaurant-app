import React from "react";
import DishCard from "./DishCard";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'

const Dishes = () => {
  return (
    <div className="dark:text-[#f4f4f4] min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishCard img={img1} title='Grilled Meat' price='$10.99' />
        <DishCard img={img2} title='Tasty Dish' price='$12.99' />
        <DishCard img={img3} title='Salmon' price='$10.99' />
        <DishCard img={img4} title='Crepe' price='$13.99' />
        <DishCard img={img5} title='Tasty Dish' price='$10.99' />
        <DishCard img={img6} title='Chicken' price='$12.99' />


      </div>
    </div>
  );
};

export default Dishes;
