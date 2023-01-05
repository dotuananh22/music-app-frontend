import React from "react";
import { IoPlayOutline } from "react-icons/io5";
import noImage from "assets/images/no-image.png";
import { useDispatch } from "react-redux";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import { setChosenSong } from "features/song/songSlice";
import moment from "moment";

interface SingleProps {
  song: Song<Singer | string>;
}

const Single = (props: SingleProps) => {
  const dispatch = useDispatch();
  const handlePlayMusic = () => {
    dispatch(setChosenSong(props.song));
  };
  return (
    <div className="flex flex-row justify-between items-center border-t border-[#222227] py-2">
      <div className="flex flex-row gap-4 items-center">
        <div className="overflow-hidden rounded-lg relative w-[48px] h-[48px] group">
          <img
            src={props.song.imageUrl || noImage}
            onError={(e) => {
              e.currentTarget.src = noImage;
            }}
            alt="demo"
            className="group-hover:scale-110 transition-all duration-300 ease-linear"
          />
          <div className="absolute group-hover:grid w-full h-full group-hover:bg-black/30 top-0 left-0 hidden place-items-center text-3xl hover:scale-110 transition-all duration-300 ease-linear">
            <div
              className="w-[48px] h-[48px] bg-[#222227]/30 rounded-lg grid place-items-center cursor-pointer"
              onClick={handlePlayMusic}
            >
              <IoPlayOutline className="text-white hover:text-[#25A56A] w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-white text-base truncate mb-1 hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear w-[200px]">
            {props.song.name}
          </h5>
          <p className="text-sm hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-linear truncate w-[200px]">
            {joinSingers(props.song.singers)}
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-sm">
          {moment.unix(props.song.songTime).utc().format("mm:ss")}
        </span>
      </div>
    </div>
  );
};

export default Single;
