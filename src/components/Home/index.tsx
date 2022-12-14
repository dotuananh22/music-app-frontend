import React, { useEffect, useState } from "react";
import Artists from "./Artists";
import Carousel from "./Carousel";
import NewRelease from "./NewRelease";
import SinglesChart from "./SinglesChart";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Carousel />
      <NewRelease />
      <Artists />
      <SinglesChart />
    </div>
  );
};

export default Home;
