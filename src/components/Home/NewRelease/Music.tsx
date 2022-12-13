import React from "react";
import DemoImage from "assets/images/demo-image.jpg";
import { HiOutlinePlay } from "react-icons/hi";
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
        <div className="absolute group-hover:grid w-full h-full group-hover:bg-black/30 top-0 left-0 hidden place-items-center text-3xl">
          <div className="w-[50px] h-[50px] bg-[#222227] rounded-lg grid place-items-center">
            <IoPlayOutline className="cursor-pointer text-white hover:text-[#25A56A]" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-white text-lg">Space Melody</h5>
        <p className="truncate">Florida Georgia</p>
      </div>
    </div>
  );
};

export default Music;
