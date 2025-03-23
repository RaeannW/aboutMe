import React from "react";
import heartPlane from "../src/assets/heartPlane.png";
import patternLarge from "../src/assets/patternLarge.jpg";

export default function ImageSection() {
  return (
    <div
      className="flex flex-col items-center justify-center h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${patternLarge})` }}
    >
      <div className="flex flex-col w-[70%] bg-teal-light items-center justify-center py-10 border-8 border-white shadow-lg ">
      <img className="flex flex-row opacity-80  w-[10rem]" src={heartPlane} />
        <h3 className="flex flex-row text-4xl text-dark text-center font-bold m-6">
          Some Large Text Can Go Here
        </h3>
        <p className="flex flex-row text-center mx-10 md:mx-30">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga illum beatae suscipit quasi id fugiat veniam sequi quaerat maiores facilis laboriosam, voluptates doloribus nisi voluptatibus at libero tenetur, quod nesciunt!</p>
        <h4 className="flex flex-row text-xl text-teal-dark text-center font-bold m-6">
          Some Large Text Can Go Here
        </h4>
      </div>
    </div>
  );
}
