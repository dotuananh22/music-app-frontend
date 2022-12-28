/* eslint-disable react-hooks/exhaustive-deps */
import Single from "components/Common/Single";
import React, { useEffect } from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import songThunk from "features/song/songThunk";
import joinSingers from "utils/joinSingers";
import moment from "moment";
import SongType from "types/song/SongType";
import Skeleton from "react-loading-skeleton";

const NewSingles = () => {
  const song = useSelector((state: IRootState) => state.song);

  return (
    <div>
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-in-out">
          New singles
        </span>
      </div>
      {song.loading.getAllNewSingleSongs ? (
        <div className="flex flex-col gap-2">
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
          <Skeleton height={"60px"} />
        </div>
      ) : (
        song.songs.newSingleSongs.map(
          (song, i) =>
            i < 5 && (
              <Single
                image={song.imageUrl}
                singerName={joinSingers(song.singers)}
                songName={song.name}
                songTime={moment.unix(song.songTime).utc().format("mm:ss")}
              />
            )
        )
      )}
    </div>
  );
};

export default NewSingles;
