import React from "react";
// @ts-ignore
import ProfileImage from "assets/images/anh-son-tung.jfif";
import Banner from "assets/images/banner/banner1.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import colors from "constants/color";

const SingerInformation = () => {
  return (
    <div>
      <div className="h-96 overflow-hidden flex flex-row gap-12 items-center mb-8">
        <div className="basis-1/6 flex flex-col gap-4 items-center text-white">
          <img
            src={ProfileImage}
            alt="profile"
            className="w-28 h-28 rounded-full"
          />
          <h2 className="text-xl uppercase font-semibold flex flex-row items-center gap-2">
            Sơn Tùng MTP{" "}
            <BsFillCheckCircleFill className="text-[#5489F2] text-sm" />
          </h2>
          <div className="text-center">
            <p>Sinh nhật: 20/01/2000</p>
            <p>Giới tính: Nam</p>
            <p>Quốc gia: Việt Nam</p>
          </div>
        </div>
        <div className="basis-5/6">
          <img src={Banner} alt="Banner" className="w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-8 py-6 border-t border-t-[#222227]">
        <h2 className="text-4xl text-white">Bio</h2>
        <p className="text-justify">
          MONO là nghệ sĩ đại diện cho thế hệ Gen Z. MONO là nghệ sĩ không ngừng
          khám phá những trải nghiệm bằng cách đắm mình vào những điều này. Mang
          đến cái nhìn đa chiều về con người, thiên nhiên và cuộc sống, MONO tin
          rằng chỉ khi chúng ta chân thành hòa làm một với mọi thứ thì chúng ta
          mới có thể hiểu sâu và chạm đến nó. ‘MONO’ cũng đại diện cho sự quyết
          tâm không ngừng nghỉ trong hành trình nghệ thuật và niềm tin của mình.
        </p>
      </div>
      <div className="flex flex-col gap-8 py-6 border-t border-t-[#222227]">
        <h2 className="text-4xl text-white">Popular Music</h2>
        <ul className={`flex flex-col divide-y divide-[${colors.lineColor}]`}>
          <li className="py-4 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
            <div className="flex flex-row justify-between items-center">
              <div
                className={`flex flex-row gap-4 items-center basis-2/4 text-[${colors.greenColor}]`}
              >
                <span>1</span>
                <img src={ProfileImage} alt="music" className="h-10 w-10" />
                <p
                  className={`text-white font-semibold truncate w-[300px] text-[${colors.greenColor}]`}
                >
                  Chúng ta của hiện tại Chúng ta của hiện tại Chúng ta của hiện
                  tại Chúng ta của hiện tại Chúng ta của hiện tại
                </p>
              </div>
              <div className="basis-1/4 text-center">
                <p>100,000,000</p>
              </div>
              <div className="flex flex-row items-center gap-4 basis-1/4 justify-end">
                <AiOutlineHeart
                  className={`hover:text-[${colors.greenColor}] text-xl`}
                />
                <span>5:01</span>
              </div>
            </div>
          </li>
          <li className="py-4 hover:bg-[#2C2F32] px-4 rounded-md cursor-pointer">
            <div className="flex flex-row justify-between items-center">
              <div
                className={`flex flex-row gap-4 items-center basis-2/4 text-[${colors.greenColor}]`}
              >
                <span>1</span>
                <img src={ProfileImage} alt="music" className="h-10 w-10" />
                <p
                  className={`text-white font-semibold truncate w-[300px] text-[${colors.greenColor}]`}
                >
                  Chúng ta của hiện tại Chúng ta của hiện tại Chúng ta của hiện
                  tại Chúng ta của hiện tại Chúng ta của hiện tại
                </p>
              </div>
              <div className="basis-1/4 text-center">
                <p>100,000,000</p>
              </div>
              <div className="flex flex-row items-center gap-4 basis-1/4 justify-end">
                <AiOutlineHeart
                  className={`hover:text-[${colors.greenColor}] text-xl`}
                />
                <span>5:01</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingerInformation;
