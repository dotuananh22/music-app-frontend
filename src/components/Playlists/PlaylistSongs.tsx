import React, { useState } from "react";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import { AiFillHeart, AiOutlineClockCircle } from "react-icons/ai";
import SubPlaylistSongs from "./SubPlaylistSongs";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import { useSelector } from "react-redux";
import { IRootState } from "app/store";
import colors from "constants/color";
import { FiMoreHorizontal } from "react-icons/fi";

interface playlistSongsProp {
  songs: Song<Singer>[] | undefined;
}

const PlaylistSongs = (props: playlistSongsProp) => {
  const favorite = useSelector((state: IRootState) => state.favorite);
  return (
    // <div className="flex flex-col gap-4 py-2 pt-4">
    //   <div className="flex flex-row justify-between items-center border-b border-[#222227] p-4">
    //     <span className="basis-2/4 pl-6 text-sm">TITLE</span>
    //     <span className="basis-1/4 text-center text-sm">DATE ADDED</span>
    //     <div className="basis-1/6 flex justify-end text-xl">
    //       <AiOutlineClockCircle />
    //     </div>
    //     <div className="basis-1/12"></div>
    //   </div>
    //   <ul className={`flex flex-col`}>
    // {props.songs &&
    //   props.songs.map((song, index) => (
    //     <li className="py-2 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
    //       <SubPlaylistSongs
    //         id={song._id}
    //         rank={index + 1}
    //         image={ProfileImage}
    //         songName={song.name}
    //         singerName={joinSingers(song.singers)}
    //         dateAdded={moment(song.createdAt).format("DD/MM/YYYY")}
    //         songTime={moment.unix(song.songTime).utc().format("mm:ss")}
    //         favorite={
    //           favorite.favorites.favoriteSongIds?.songs.includes(
    //             song._id
    //           ) as boolean
    //         }
    //       />
    //     </li>
    //   ))}
    //   </ul>
    // </div>
    <table className="table-auto w-full mt-8">
      <thead>
        <tr className="border-b border-[#222227]">
          <th className="w-[20px] p-2"></th>
          <th className="text-left w-1/2 p-2 text-sm">TITLE</th>
          <th className="p-2 text-left text-sm">DATE ADDED</th>
          <th className="p-2 w-[20px]"></th>
          <th className="w-[100px] p-2 text-lg">
            <AiOutlineClockCircle className="m-auto" />
          </th>
          <th className="p-2 w-[30px]"></th>
        </tr>
      </thead>
      <tbody>
        {props.songs &&
          props.songs.map((song, index) => (
            <SubPlaylistSongs
              id={song._id}
              rank={index + 1}
              image={ProfileImage}
              songName={song.name}
              singerName={joinSingers(song.singers)}
              dateAdded={moment(song.createdAt).format("DD/MM/YYYY")}
              songTime={moment.unix(song.songTime).utc().format("mm:ss")}
              favorite={
                favorite.favorites.favoriteSongIds?.songs.includes(
                  song._id
                ) as boolean
              }
            />
          ))}
      </tbody>
    </table>
  );
};

export default PlaylistSongs;
