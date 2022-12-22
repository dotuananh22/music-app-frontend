import React, { useEffect } from "react";
import Home from "components/Home";
import { useDispatch } from "react-redux";
import songThunk from "features/song/songThunk";
import singerThunk from "features/singer/singerThunk";
import { AppDispatch } from "app/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    Promise.all([
      dispatch(
        songThunk.getAllSongs({
          limit: 12,
          skip: 0,
          sort: "publishTime",
          order: "desc",
        })
      ),
      dispatch(
        singerThunk.getAllSingers({
          limit: 12,
          skip: 0,
          sort: "debutYear",
          order: "desc",
        })
      ),
    ]);
  }, []);

  return <Home />;
};

export default HomePage;
