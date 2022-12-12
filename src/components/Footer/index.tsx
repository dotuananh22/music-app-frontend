import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import MainLogo from "../../assets/images/logo/main-logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#222227] mb-[100px] ml-[300px] p-10">
      <div className="flex flex-row  gap-40">
        <div className="flex flex-col gap-2">
          <img src={MainLogo} alt="main-logo" className="w-[150px]" />
          <p>AMusic Audio</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <AiOutlineMail className="text-lg" />
              <span>support@amusic.com</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsTelephone />
              <span>0123456789</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-32">
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold">Title 1</h6>
            <div className="flex flex-col gap-4">
              <span>About</span>
              <span>My Profile</span>
              <span>Contacts</span>
              <span>News</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6>Title 1</h6>
            <div className="flex flex-col gap-4">
              <span>Store</span>
              <span>Music</span>
              <span>Video</span>
              <span>Podcasts</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6>Title 1</h6>
            <div className="flex flex-col gap-4">
              <span>About</span>
              <span>About</span>
              <span>About</span>
              <span>About</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6>Title 1</h6>
            <div className="flex flex-col gap-4">
              <span>About</span>
              <span>About</span>
              <span>About</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#39393D]" />
      <div className="flex flex-row justify-between items-center">
        <span>© AMusic, 2022. Created by Do Tuan Anh, Pham Quoc An</span>
        <div className="flex flex-row gap-4">
          <span className="w-[40px] h-[40px] rounded-full border border-[#25A56A] bg-[#25A56A] grid place-items-center">
            <SlSocialFacebook />
          </span>
          <span className="w-[40px] h-[40px] rounded-full border border-white grid place-items-center">
            <CiTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
