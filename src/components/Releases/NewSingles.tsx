/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import Single from "components/Common/Single";
import { useDispatch, useSelector } from "react-redux";
import songThunk from "features/song/songThunk";
import { AppDispatch, IRootState } from "app/store";
import SongType from "types/song/SongType";
import Skeleton from "react-loading-skeleton";
import { setListChosenSong } from "features/song/songSlice";

const NewSingles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);

  useEffect(() => {
    dispatch(
      songThunk.getAllSongs({
        query: {
          limit: 12,
          skip: 0,
          sort: ["publishTime"],
          order: [-1],
        },
        type: SongType.NEW_SINGLE,
      })
    );
  }, [dispatch]);

  const handlePlayMusic = (index: number) => {
    dispatch(
      setListChosenSong({
        indexListChosenSong: index,
        listChosenSong: song.songs.newSingleSongs,
      })
    );
  };

  return (
    <div className="mt-6">
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white">New singles</span>
      </div>
      <div className="grid grid-cols-3 grid-rows-5 gap-x-12">
        {song.loading.getAllNewSingleSongs ? (
          <>
            <Skeleton height={"50px"} />
            <Skeleton height={"50px"} />
            <Skeleton height={"50px"} />
          </>
        ) : (
          song.songs.newSingleSongs.map((song, index) => {
            return (
              <Single
                song={song}
                index={index}
                handlePlayMusic={handlePlayMusic}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewSingles;
