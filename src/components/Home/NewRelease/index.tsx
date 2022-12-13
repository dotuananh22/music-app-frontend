import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import DemoImage from "assets/images/demo-image.jpg";
import Music from "./Music";

const NewRelease = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-3xl">New Releases</h2>
        <span className="flex flex-row items-center gap-2 text-lg hover:text-[#25A56A]">
          See all <BsArrowRightShort className="text-2xl" />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-8">
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
        <Music />
      </div>
    </div>
  );
};

export default NewRelease;