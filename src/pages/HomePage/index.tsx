import React, { useEffect } from "react";
import Home from "components/Home";
import { useDispatch } from "react-redux";
import songThunk from "features/song/songThunk";
import singerThunk from "features/singer/singerThunk";
import { AppDispatch } from "app/store";
import SongType from "types/song/SongType";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Promise.all([
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
      ),
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
      ),
      dispatch(
        singerThunk.getAllSingers({
          limit: 12,
          skip: 0,
          sort: ["debutYear"],
          order: [-1],
        })
      ),
    ]);
  }, []);

  return <Home />;
};

export default HomePage;
