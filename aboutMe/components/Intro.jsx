import React from "react";
import plane from "../src/assets/plane.jpg";
import sunIcon from "../src/assets/sunIcon.svg";

export default function Intro() {
  return (
    <div className="flex pt-5">
      <div className="mx-10">
        <p className="[writing-mode:vertical-lr] text-6xl">Behind the Scenes</p>
      </div>
      <div className="flex items-center text-center">
        <img className="h-[550px] w-auto" src={plane} />

        <div className="m-12 text-center">
          <img className="h-14 w-auto place-self-center m-4" src={sunIcon} />
          <span className="text-xs mb-2">Some Subheading Text Can Go Here</span>
          <h1 className="text-3xl mb-4">Heading Goes Here</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <button className=" px-8 py-2 bg-black text-white">Button Text</button>
        </div>
      </div>
    </div>
  );
}
