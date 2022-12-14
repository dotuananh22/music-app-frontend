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
    <div className="flex flex-row justify-between items-center border-t border-[#222227] py-2">
      <div className="flex flex-row gap-4 items-center">
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
        <div>
          <h5 className="text-white text-base truncate mb-1 hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear w-[200px]">
            {props.songName}
          </h5>
          <p className="text-sm hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear truncate w-[200px]">
            {props.singerName}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-sm">{props.songTime}</span>
      </div>
    </div>
  );
};

export default Single;
