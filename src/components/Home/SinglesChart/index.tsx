import React from "react";
import TopSingles from "./TopSingles";
import NewSingles from "./NewSingles";

const SinglesChart = () => {
  return (
    <div className="mt-10 grid grid-cols-3 gap-12">
      <TopSingles />
      <NewSingles />
    </div>
  );
};

export default SinglesChart;
