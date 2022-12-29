/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import Single from "components/Common/Single";
import { useDispatch, useSelector } from "react-redux";
import songThunk from "features/song/songThunk";
import { AppDispatch, IRootState } from "app/store";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import SongType from "types/song/SongType";
import Skeleton from "react-loading-skeleton";

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
  }, []);

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
          song.songs.newSingleSongs.map((song) => {
            return (
              <Single
                image={song.imageUrl}
                singerName={joinSingers(song.singers)}
                songName={song.name}
                songTime={moment.unix(song.songTime).utc().format("mm:ss")}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default NewSingles;
