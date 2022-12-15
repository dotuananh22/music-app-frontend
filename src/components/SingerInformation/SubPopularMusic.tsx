import React from "react";
// @ts-ignore
import { AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";

interface SubPopularMusicProps {
  rank: number;
  image: string;
  songName: string;
  views: string;
  favorite: boolean;
  songTime: string;
}

const SubPopularMusic = (props: SubPopularMusicProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className={`flex flex-row gap-4 items-center basis-2/4`}>
        <span>{props.rank}</span>
        <img src={props.image} alt="music" className="h-10 w-10" />
        <p className={`text-white font-semibold truncate w-[300px]`}>
          {props.songName}
        </p>
      </div>
      <div className="basis-1/4 text-center">
        <p>{props.views}</p>
      </div>
      <div className="flex flex-row items-center gap-8 basis-1/4 justify-end">
        <AiOutlineHeart
          className={`hover:text-[${colors.greenColor}] text-xl`}
        />
        <span>{props.songTime}</span>
      </div>
    </div>
  );
};

export default SubPopularMusic;
