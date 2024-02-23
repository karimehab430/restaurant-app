import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-slate-50 border-2 dark:border-none md:border-none p-5 rounded-lg shadow-lg dark:bg-[#202020] 
    dark:text-[#f4f4f4]/40 text-zinc-950/40 ">
      <div>
        <p className=" font-medium">
          "Consectetur aute consectetur Lorem est ipsum eiusmod ex officia
          ullamco veniam aute. Deserunt reprehenderit sit esse reprehenderit
          nostrud cillum veniam anim eiusmod. Do aute cupidatat et magna
          occaecat eiusmod veniam enim occaecat ad quis ullamco incididunt.
          Deserunt cupidatat incididunt irure incididunt cupidatat. Dolor ipsum
          irure nulla ullamco incididunt eu. 4.5/5"
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
      <img className="rounded-full w-[65px]" src={props.img} alt=""></img>
        <h3 className="font-semibold text-zinc-950 dark:text-[#f4f4f4]"> {props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
