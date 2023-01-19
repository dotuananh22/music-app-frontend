import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import SubPlaylistSongs from "./SubPlaylistSongs";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import { useParams } from "react-router-dom";
import { setListChosenSong } from "features/song/songSlice";

interface playlistSongsProp {
  songs: Song<Singer>[] | undefined;
}

const PlaylistSongs = (props: playlistSongsProp) => {
  const favorite = useSelector((state: IRootState) => state.favorite);
  const dispatch = useDispatch<AppDispatch>();
  const param = useParams();
  const [indexDropdown, setIndexDropdown] = useState(0);

  const handlePlayMusic = (index: number) => {
    dispatch(
      setListChosenSong({
        indexListChosenSong: index,
        listChosenSong: props.songs ? (props.songs as Song<Singer>[]) : [],
      })
    );
  };

  return (
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
              song={song}
              handlePlayMusic={handlePlayMusic}
              playlistId={param.id as string}
              rank={index + 1}
              favorite={
                favorite.favorites.favoriteSongIds?.songs.includes(
                  song._id
                ) as boolean
              }
              index={index}
              indexDropdown={indexDropdown}
              setIndexDropdown={setIndexDropdown}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PlaylistSongs;
