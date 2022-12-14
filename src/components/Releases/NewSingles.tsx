/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { IoMusicalNoteOutline } from "react-icons/io5";
import Single from "components/Common/Single";
import DemoImage from "assets/images/demo-image.jpg";

const NewSingles = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row gap-3 items-center text-3xl mb-6">
        <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
        <span className="text-white">New singles</span>
      </div>
      <div className="grid grid-cols-3 gap-12">
        <div className="flex flex-col">
          <Single
            image={DemoImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP Sơn image.png image.png image.png sdfsdf"
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
        <div className="flex flex-col">
          <Single
            image={DemoImage}
            songName="Chúng ta của hiện tại"
            singerName="Sơn Tùng MTP Sơn image.png image.png image.png sdfsdf"
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
        <div>
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
      </div>
    </div>
  );
};

export default NewSingles;
