import React from "react";
import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="dark:text-[#f4f4f4] min-h-screen flex flex-row justify-center items-center gap-x-8 lg:px-32 px-32 mt-16">
      <img className="lg:w-1/3 hidden sm:block rounded-md" src={about} alt=""></img>

      <div className="space-y-4 lg:pt-14">
        <h1 className="font-bold text-4xl text-start">Why Choose Us?</h1>
        <p className="font-normal">
          Laborum ex nisi eu enim cillum enim nulla. Cillum officia esse
          consequat labore. Pariatur laborum dolor fugiat voluptate. Consectetur
          aliquip ipsum irure consequat excepteur voluptate consectetur in culpa
          reprehenderit est adipisicing. Ipsum et et mollit fugiat dolore. Nisi
          id tempor commodo consectetur aliquip. Quis esse enim aliquip
          excepteur proident laborum anim pariatur dolor ullamco nostrud. Labore
          quis in culpa laboris. Elit et duis consequat et exercitation proident
          ullamco nulla dolor. Quis ut exercitation duis fugiat cupidatat
          deserunt nulla dolore.
        </p>
        <p className="font-normal">
          Magna sint commodo est ipsum Lorem enim nisi voluptate ipsum consequat
          commodo eu id cillum. Enim pariatur dolore duis qui nisi aliquip
          tempor dolor cillum magna. Irure anim excepteur occaecat enim fugiat
          occaecat. Do consectetur consectetur commodo nostrud proident Lorem do
          proident excepteur nisi dolore ut anim.
        </p>
        <p className="font-normal">
          Reprehenderit ad voluptate nulla eiusmod fugiat veniam occaecat
          reprehenderit dolor ullamco. Ad veniam duis irure aliqua nisi occaecat
          exercitation adipisicing nulla. In duis sit mollit pariatur aliquip
          aute laborum Lorem labore ad consectetur. Aute eu id deserunt laborum
          laborum irure ex veniam anim. Laborum qui anim nisi ipsum culpa nisi
          Lorem laborum id pariatur duis sint Lorem. Cillum dolor laboris sit
          enim fugiat ea aute officia non ipsum ullamco.Cupidatat quis sunt sunt
          dolor. Veniam aliqua culpa dolor pariatur cillum exercitation
          adipisicing ullamco fugiat. Aliquip non tempor qui non mollit ipsum
          quis minim irure Lorem anim anim. Culpa labore elit aute nulla nisi
          sint. Culpa esse duis consequat amet ex anim. Ullamco duis in pariatur
          est cillum aliquip duis esse cillum cillum occaecat deserunt
          consectetur cupidatat.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="text-[#f4f4f4] font-medium px-5 py-2 bg-blue-600 transition-all border-2 dark:border-none rounded-md mt-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
