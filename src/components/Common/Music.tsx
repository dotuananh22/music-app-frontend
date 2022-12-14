import React from "react";
import DemoImage from "assets/images/demo-image.jpg";
import { IoPlayOutline } from "react-icons/io5";

const Music = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg relative group">
        <img
          src={DemoImage}
          alt="demo"
          className="group-hover:scale-110 transition-all duration-300 ease-linear"
        />
        <div className="absolute group-hover:grid w-full h-full group-hover:bg-black/30 top-0 left-0 hidden place-items-center text-3xl hover:scale-110 transition-all duration-300 ease-linear">
          <div className="w-[54px] h-[54px] bg-[#222227] rounded-lg grid place-items-center cursor-pointer">
            <IoPlayOutline className="text-white hover:text-[#25A56A] w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-white text-base truncate">Space Melody</h5>
        <p className="truncate text-sm">Florida Georgia Florida Georgia</p>
      </div>
    </div>
  );
};

export default Music;
