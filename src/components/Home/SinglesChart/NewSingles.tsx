import Single from "components/Common/Single";
import React from "react";
import DemoImage from "assets/images/demo-image.jpg";
import { IoMusicalNoteOutline } from "react-icons/io5";

const NewSingles = () => {
  return (
    <div>
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white hover:text-[#25A56A] cursor-pointer transition-all duration-300 ease-in-out">
          New singles
        </span>
      </div>
      <Single
        image={DemoImage}
        songName="Chúng ta của hiện tại"
        singerName="Sơn Tùng MTP"
        songTime="5:01"
      />
      <Single
        image={DemoImage}
        songName="Chúng ta của hiện tại"
        singerName="Sơn Tùng MTP"
        songTime="5:01"
      />
      <Single
        image={DemoImage}
        songName="Chúng ta của hiện tại"
        singerName="Sơn Tùng MTP"
        songTime="5:01"
      />
      <Single
        image={DemoImage}
        songName="Chúng ta của hiện tại"
        singerName="Sơn Tùng MTP"
        songTime="5:01"
      />
      <Single
        image={DemoImage}
        songName="Chúng ta của hiện tại"
        singerName="Sơn Tùng MTP"
        songTime="5:01"
      />
    </div>
  );
};

export default NewSingles;
