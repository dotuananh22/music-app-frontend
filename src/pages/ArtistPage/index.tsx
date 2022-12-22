import { AppDispatch } from "app/store";
import Artists from "components/Artists";
import singerThunk from "features/singer/singerThunk";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ArtistPage = () => {
  return <Artists />;
};

export default ArtistPage;
