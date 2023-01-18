import React, { useEffect } from "react";
import Releases from "./Releases";
import Information from "./Information";
import PopularMusic from "./PopularMusic";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from "app/store";
import playlistThunk from "features/playlist/playlistThunk";
import favoriteThunk from "features/favorite/favoriteThunk";

const SingerInformation = () => {
  const dispatch = useDispatch<AppDispatch>();
  const playlist = useSelector((state: IRootState) => state.playlist);

  useEffect(() => {
    dispatch(playlistThunk.getOnePlaylist("63b3d09342e533a84e4ea7cd"));
    dispatch(favoriteThunk.getAllFavoriteSongIds());
  }, [dispatch]);

  return (
    <div>
      <Information />
      {/* Test */}
      <PopularMusic songs={playlist.playlists.onePlaylist?.songs} />
      <Releases />
    </div>
  );
};

export default SingerInformation;
