import React from "react";
import DemoImage from "assets/images/demo-image.jpg";
import { IoPlayOutline } from "react-icons/io5";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";

interface MusicProps {
  id: string;
  song: Song<Singer | string>;
}

const Music = (props: MusicProps) => {
  const joinSingers = (singers: (Singer | string)[]) => {
    if (typeof singers[0] === "string") {
      return singers.join(", ");
    }
    // @ts-ignore
    return singers.map((singer: Singer) => singer.nickname).join(", ");
  };

  console.log(props.song);

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg relative group">
        <img
          src={props.song.imageUrl || DemoImage}
          alt="demo"
          className="group-hover:scale-110 transition-all duration-300 ease-linear"
          onError={(e) => {
            e.currentTarget.src = DemoImage;
          }}
        />
        <div className="absolute group-hover:opacity-100 grid w-full h-full bg-black/30 opacity-0 top-0 left-0 place-items-center text-3xl hover:scale-110 transition-all duration-300 ease-linear">
          <div className="w-[54px] h-[54px] bg-[#222227] rounded-lg grid place-items-center cursor-pointer hover:text-[#25A56A]">
            <IoPlayOutline className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div>
        <h5 className="text-white text-base truncate">{props.song.name}</h5>
        <p className="truncate text-sm" title={joinSingers(props.song.singers)}>
          {joinSingers(props.song.singers)}
        </p>
      </div>
    </div>
  );
};

export default Music;
