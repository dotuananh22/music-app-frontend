/* eslint-disable react-hooks/exhaustive-deps */
import Single from "components/Common/Single";
import React, { useEffect } from "react";
import { HiOutlineMusicNote } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import songThunk from "features/song/songThunk";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import SongType from "types/song/SongType";
import Skeleton from "react-loading-skeleton";
import { setListChosenSong } from "features/song/songSlice";

const TopSingles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);

  useEffect(() => {
    dispatch(
      songThunk.getAllSongs({
        query: {
          limit: 5,
          skip: 0,
          sort: ["listens"],
          order: [-1],
        },
        type: SongType.TOP_SINGLE,
      })
    );
  }, []);

  const handlePlayMusic = (index: number) => {
    dispatch(
      setListChosenSong({
        indexListChosenSong: index,
        listChosenSong: song.songs.topSingleSongs,
      })
    );
  };

  return (
    <div>
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <HiOutlineMusicNote className="text-[#25A56A] mt-1.5" />
        <span className="text-white hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-in-out">
          Top singles
        </span>
      </div>
      {song.loading.getAllTopSingleSongs ? (
        <div className="flex flex-col gap-2">
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
        </div>
      ) : (
        song.songs.topSingleSongs.map((song, index) => {
          return (
            <Single
              song={song}
              handlePlayMusic={handlePlayMusic}
              index={index}
            />
          );
        })
      )}
    </div>
  );
};

export default TopSingles;
