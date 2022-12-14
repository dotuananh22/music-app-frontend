import React from "react";
import TopSingles from "./TopSingles";
import NewSingles from "./NewSingles";

const SinglesChart = () => {
  return (
    <div className="mt-10 flex flex-row gap-12">
      <TopSingles />
      <NewSingles />
    </div>
  );
};

export default SinglesChart;
