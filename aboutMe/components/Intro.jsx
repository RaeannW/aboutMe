import React from "react";
import suitcase from "../src/assets/suitcase.jpeg";
import sunIcon from "../src/assets/sunIcon.svg";

export default function Intro() {
  return (
    <div className="flex md:p-5 pb-10 flex-row">
      <div className="md:mx-10 hidden md:flex flex-col">
        <p className="[writing-mode:vertical-lr] text-6xl">Behind the Scenes</p>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row">

          <div className="md:w-[45%] w-full flex flex-col">
            <img className="w-full h-[500px] object-cover" src={suitcase} />
          </div>

          <div className="md:m-12 md:w-[50%] w-full flex flex-col text-center">
            <img className="h-14 w-auto place-self-center md:m-4 mt-10 mb-4" src={sunIcon} />
            <div className="w-full">
              <span className="text-xs mb-2">
                Some Subheading Text Can Go Here
              </span>
              <h1 className="text-4xl md:text-6xl mb-4">Heading Goes Here</h1>
              <p className="mx-12 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit.
              </p>
              <button className="buttonPrimary">
                Button Text
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
