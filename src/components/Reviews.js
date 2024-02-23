import React from "react";
import ReviewCard from "./ReviewCard";
import review1 from '../assets/review1.jpg'
import review2 from '../assets/review2.jpg'
import review3 from '../assets/review3.jpg'

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 ">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-8 dark:text-[#f4f4f4] text-zinc-950">
        Customer Reviews
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={review1} name="Michael Cera"/>
        <ReviewCard img={review2} name="Ryan Gosling"/>
        <ReviewCard img={review3} name="Benny Safdie"/>

      </div>
    </div>
  );
};

export default Reviews;
