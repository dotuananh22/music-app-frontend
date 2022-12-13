import React from "react";
import DemoImage from "assets/images/demo-image.jpg";

const Artist = () => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer group">
      <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-full group-hover:before:bg-gradient-to-t group-hover:before:from-[#25A56A]/30 group-hover:before:to-black/5 before:bg-black/0 group-hover:before:block transition-all duration-200 ease-in-out overflow-hidden rounded-lg">
        <img src={DemoImage} alt="demo" />
      </div>
      <div>
        <h5 className="text-white text-lg text-center group-hover:text-[#25A56A] transition-all duration-200 ease-in-out">
          Space Melody
        </h5>
      </div>
    </div>
  );
};

export default Artist;
