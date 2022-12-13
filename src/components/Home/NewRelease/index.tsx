import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Music from "./Music";

const NewRelease = () => {
  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white text-3xl font-normal">New Releases</h2>
        <span className="flex flex-row items-center gap-2 text-lg group cursor-pointer">
          See all{" "}
          <BsArrowRightShort className="text-2xl group-hover:text-[#25A56A]" />
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
