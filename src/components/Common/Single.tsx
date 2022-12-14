import React from "react";
import { IoPlayOutline } from "react-icons/io5";

interface SingleProps {
  image: string;
  songName: string;
  singerName: string;
  songTime: string;
}

const Single = (props: SingleProps) => {
  return (
    <div className="flex flex-row gap-4 w-[380px] h-[64px] items-center border-t border-[#222227]">
      <div className="overflow-hidden rounded-lg relative w-[48px] h-[48px] group">
        <img
          src={props.image}
          alt="demo"
          className="group-hover:scale-110 transition-all duration-300 ease-linear"
        />
        <div className="absolute group-hover:grid w-full h-full group-hover:bg-black/30 top-0 left-0 hidden place-items-center text-3xl hover:scale-110 transition-all duration-300 ease-linear">
          <div className="w-[48px] h-[48px] bg-[#222227]/30 rounded-lg grid place-items-center cursor-pointer">
            <IoPlayOutline className="text-white hover:text-[#25A56A] w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex-row justify-between gap-10 items-center">
        <div>
          <h5 className="text-white text-base truncate mb-1 hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear">
            {props.songName}
          </h5>
          <p className="truncate text-sm hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear">
            {props.singerName}
          </p>
        </div>
        <div>
          <span className="text-sm">{props.songTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Single;
