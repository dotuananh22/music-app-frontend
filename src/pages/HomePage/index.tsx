import React, { useEffect } from "react";
import Home from "components/Home";
import { useDispatch } from "react-redux";
import songThunk from "features/song/songThunk";
import singerThunk from "features/singer/singerThunk";
import { AppDispatch } from "app/store";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      songThunk.getAllSongs({
        limit: 12,
        skip: 0,
        sort: ["publishTime"],
        order: [-1],
      })
    );
    dispatch(
      singerThunk.getAllSingers({
        limit: 12,
        skip: 0,
        sort: ["debutYear"],
        order: [-1],
      })
    );
  }, []);

  return <Home />;
};

export default HomePage;
