/* eslint-disable react-hooks/exhaustive-deps */
import Single from "components/Common/Single";
import React, { useEffect } from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import songThunk from "features/song/songThunk";
import joinSingers from "utils/joinSingers";
import moment from "moment";

const NewSingles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);

  useEffect(() => {
    dispatch(
      songThunk.getAllSongs({
        limit: 5,
        skip: 0,
        sort: ["publishTime"],
        order: [-1],
      })
    );
  }, []);

  return (
    <div>
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-in-out">
          New singles
        </span>
      </div>
      {song.songs.map((song) => {
        return (
          <Single
            image={song.imageUrl}
            singerName={joinSingers(song.singers)}
            songName={song.name}
            songTime={moment.unix(song.songTime).utc().format("mm:ss")}
          />
        );
      })}
    </div>
  );
};

export default NewSingles;
