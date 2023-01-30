import React, { useState } from "react";
// @ts-ignore
import SubPopularMusic from "./SubPopularMusic";
import Song from "types/song/Song";
import Singer from "types/singer/Singer";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "app/store";
import { useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { setListChosenSong } from "features/song/songSlice";
import Skeleton from "react-loading-skeleton";

interface popularMusicProp {
  songs: Song<Singer>[] | undefined;
  loading: boolean;
}

const PopularMusic = (props: popularMusicProp) => {
  const favorite = useSelector((state: IRootState) => state.favorite);
  const dispatch = useDispatch();
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
    <>
      <h2 className="text-4xl text-white">Popular Music</h2>
      <table className="table-auto w-full mt-8">
        <thead>
          <tr className="border-b border-[#222227]">
            <th className="w-[20px] p-2"></th>
            <th className="text-left w-1/2 p-2 text-sm">TITLE</th>
            <th className="p-2 text-left text-sm">PUBLISH TIME</th>
            <th className="p-2 w-[20px]"></th>
            <th className="w-[100px] p-2 text-lg">
              <AiOutlineClockCircle className="m-auto" />
            </th>
            <th className="p-2 w-[30px]"></th>
          </tr>
        </thead>
        <tbody>
          {props.loading ? (
            <>
              <tr>
                <td colSpan={6}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
              <tr>
                <td colSpan={6}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
              <tr>
                <td colSpan={6}>
                  <Skeleton height={"52px"} />
                </td>
              </tr>
            </>
          ) : (
            props.songs &&
            props.songs.map((song, index) => (
              <SubPopularMusic
                song={song}
                playlistId={param.id as string}
                rank={index + 1}
                favorite={
                  favorite.favorites.favoriteSongIds?.songs.includes(
                    song._id
                  ) as boolean
                }
                indexDropdown={indexDropdown}
                setIndexDropdown={setIndexDropdown}
                handlePlayMusic={handlePlayMusic}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default PopularMusic;
