import React from "react";
import DemoImage from "assets/images/demo-image.jpg";

const Artist = () => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer group">
      <div
        className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:opacity-0 group-hover:before:opacity-100 
      group-hover:before:bg-gradient-to-t before:from-[#25A56A]/30 before:to-black/5 before:transition-all before:duration-500 before:ease-in-out overflow-hidden rounded-lg"
      >
        <img src={DemoImage} alt="demo" />
      </div>
      <div>
        <h5 className="text-white text-base text-center group-hover:text-[#25A56A] transition-all duration-500 ease-in-out">
          Space Melody
        </h5>
      </div>
    </div>
  );
};

export default Artist;
