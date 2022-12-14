import Single from "components/Common/Single";
import React from "react";
import { HiOutlineMusicNote } from "react-icons/hi";
import DemoImage from "assets/images/demo-image.jpg";
import { IoMusicalNoteOutline } from "react-icons/io5";

const SinglesChart = () => {
  return (
    <div className="mt-10 flex flex-row gap-12">
      <div>
        <div className="flex flex-row gap-3 items-center text-3xl mb-6">
          <HiOutlineMusicNote className="text-[#25A56A] mt-1.5" />
          <span className="text-white">Top singles</span>
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
      <div>
        <div className="flex flex-row gap-3 items-center text-3xl mb-6">
          <IoMusicalNoteOutline className="text-[#25A56A] mt-1.5" />
          <span className="text-white">New singles</span>
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
    </div>
  );
};

export default SinglesChart;
