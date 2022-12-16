import React from "react";
// @ts-ignore
import { AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";

interface SubFavouriteSongsProps {
  rank: number;
  image: string;
  songName: string;
  singerName: string;
  dateAdded: string;
  favorite: boolean;
  songTime: string;
}

const SubFavouriteSongs = (props: SubFavouriteSongsProps) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className={`flex flex-row gap-4 items-center basis-2/4`}>
        <span>{props.rank}</span>
        <img src={props.image} alt="music" className="h-10 w-10" />
        <div>
          <p className={`text-white font-semibold truncate w-[300px]`}>
            {props.songName}
          </p>
          <p className={`text-[#c0c0c0] truncate w-[300px]`}>
            {props.singerName}
          </p>
        </div>
      </div>
      <div className="basis-1/4 text-center">
        <p>{props.dateAdded}</p>
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

export default SubFavouriteSongs;
