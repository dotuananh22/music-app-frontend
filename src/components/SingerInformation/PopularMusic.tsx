import React from "react";
// @ts-ignore
import ProfileImage from "assets/images/no-image.png";
import SubPopularMusic from "./SubPopularMusic";

const PopularMusic = () => {
  return (
    <div className="flex flex-col gap-8 py-2 pt-6 border-t border-t-[#222227]">
      <h2 className="text-4xl text-white">Popular Music</h2>
      <ul className={`flex flex-col`}>
        <li className="py-3 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPopularMusic
            rank={1}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            views="99,000,100"
            songTime="5:01"
            favorite={true}
          />
        </li>
        <li className="py-3 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPopularMusic
            rank={2}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            views="99,000,100"
            songTime="5:01"
            favorite={false}
          />
        </li>
        <li className="py-3 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPopularMusic
            rank={3}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            views="99,000,100"
            songTime="5:01"
            favorite={false}
          />
        </li>
      </ul>
    </div>
  );
};

export default PopularMusic;
