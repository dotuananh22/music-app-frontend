import React, { useEffect, useState } from "react";
import Artists from "./Artists";
import Carousel from "./Carousel";
import NewRelease from "./NewRelease";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Carousel />
      <NewRelease />
      <Artists />
    </div>
  );
};

export default Home;
