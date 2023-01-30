import React, { useEffect, useState } from "react";
import Releases from "./Releases";
import Information from "./Information";
import PopularMusic from "./PopularMusic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import favoriteThunk from "features/favorite/favoriteThunk";
import { useParams } from "react-router-dom";
import songThunk from "features/song/songThunk";

const SingerInformation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const song = useSelector((state: IRootState) => state.song);
  const params = useParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(
      songThunk.getAllSongsBySingerId({
        query: {
          sort: ["listens"],
          order: [-1],
          limit: 3,
          skip: 0,
        },
        singerId: params.id as string,
      })
    );
    dispatch(
      songThunk.getReleasesSongsBySingerId({
        query: {
          sort: ["createdAt"],
          order: [1],
          limit: 12,
          skip: 0,
        },
        singerId: params.id as string,
      })
    );
    dispatch(favoriteThunk.getAllFavoriteSongIds());
  }, [dispatch, params.id]);

  useEffect(() => {
    dispatch(
      songThunk.getReleasesSongsBySingerId({
        query: {
          sort: ["createdAt"],
          order: [1],
          limit: 12,
          skip: (page - 1) * 12,
        },
        singerId: params.id as string,
      })
    );
  }, [page, dispatch, params.id]);

  return (
    <div>
      <Information songs={song.songs.songsBySingerId} />
      <PopularMusic
        songs={song.songs.songsBySingerId}
        loading={song.loading.getSongsBySingerId}
      />
      <Releases
        songs={song.songs.releaseSongsBySingerId}
        loading={song.loading.getReleaseSongsBySingerId}
        pagination={song.pagination}
        setPage={setPage}
      />
    </div>
  );
};

export default SingerInformation;
