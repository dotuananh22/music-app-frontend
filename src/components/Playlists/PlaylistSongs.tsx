import React from "react";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import { AiOutlineClockCircle } from "react-icons/ai";
import SubPlaylistSongs from "./SubPlaylistSongs";

const PlaylistSongs = () => {
  return (
    <div className="flex flex-col gap-4 py-2 pt-4">
      <div className="flex flex-row justify-between items-center border-b border-[#222227] p-4">
        <span className="basis-2/4 pl-6">TITLE</span>
        <span className="basis-1/4 text-center">DATE ADDED</span>
        <div className="basis-1/4 flex justify-end">
          <AiOutlineClockCircle />
        </div>
      </div>
      <ul className={`flex flex-col`}>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPlaylistSongs
            rank={1}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={false}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPlaylistSongs
            rank={2}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={false}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPlaylistSongs
            rank={3}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={false}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPlaylistSongs
            rank={4}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={false}
          />
        </li>
        <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
          <SubPlaylistSongs
            rank={5}
            image={ProfileImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP"
            dateAdded="25/11/2022"
            songTime="5:01"
            favorite={false}
          />
        </li>
      </ul>
    </div>
  );
};

export default PlaylistSongs;
