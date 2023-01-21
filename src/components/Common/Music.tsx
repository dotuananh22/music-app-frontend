import React from "react";
import noImage from "assets/images/no-image.png";
import { IoPlayOutline } from "react-icons/io5";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { get } from "lodash";

interface MusicProps {
  id: string;
  song: Song<Singer | string>;
  index: number;
  handlePlayMusic?: (index: number) => void;
}

const Music = (props: MusicProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChooseSong = () => {
    // dispatch(setChosenSong(props.song));
    props.handlePlayMusic?.(props.index);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg relative group">
        <img
          src={props.song.imageUrl || noImage}
          alt="demo"
          className="group-hover:scale-110 transition-all duration-300 ease-linear h-[170px] w-[170px] object-cover"
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />
        <div className="absolute group-hover:opacity-100 grid w-full h-full bg-black/30 opacity-0 top-0 left-0 place-items-center text-3xl hover:scale-110 transition-all duration-300 ease-linear">
          <div
            className="w-[54px] h-[54px] bg-[#222227] rounded-lg grid place-items-center cursor-pointer hover:text-[#25A56A]"
            onClick={handleChooseSong}
          >
            <IoPlayOutline className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div>
        <h5
          className="text-white text-base truncate cursor-pointer hover:text-[#25A56A]"
          onClick={() => navigate(`/song/${props.song._id}`)}
        >
          {props.song.name}
        </h5>
        <p className="truncate text-sm" title={joinSingers(props.song.singers)}>
          {props.song.singers.map((singer, index) => (
            <>
              <NavLink
                to={`/artist/${get(singer, "_id", "")}`}
                className="hover:text-[#25A56A]"
              >
                {get(singer, "nickname", "")}
              </NavLink>
              {index < props.song.singers.length - 1 && ", "}
            </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Music;
