import React from "react";
import Releases from "./Releases";
import Information from "./Information";
import PopularMusic from "./PopularMusic";

const SingerInformation = () => {
  return (
    <div>
      <Information />
      <PopularMusic />
      <Releases />
    </div>
  );
};

export default SingerInformation;
