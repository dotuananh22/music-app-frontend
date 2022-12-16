import React from "react";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import SubFavouriteSongs from "./SubFavouriteSongs";
import { AiOutlineClockCircle } from "react-icons/ai";

const FavouriteSongs = () => {
  return (
    <div className="flex flex-col gap-4 py-2 pt-4">
      <div className="flex flex-row justify-between items-center border-b border-[#222227] p-4">
        <span className="basis-2/4 pl-6 text-sm">TITLE</span>
        <span className="basis-1/4 text-center text-sm">DATE ADDED</span>
        <div className="basis-1/4 flex justify-end text-xl">
          <AiOutlineClockCircle />
        </div>
      </div>
      <ul className={`flex flex-col`}>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubFavouriteSongs
            rank={1}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={true}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubFavouriteSongs
            rank={2}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={true}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubFavouriteSongs
            rank={3}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={true}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubFavouriteSongs
            rank={4}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={true}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubFavouriteSongs
            rank={5}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={true}
          />
        </li>
      </ul>
    </div>
  );
};

export default FavouriteSongs;
