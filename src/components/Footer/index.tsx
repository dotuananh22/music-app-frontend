import React from "react";
import { BsTelephone, BsYoutube } from "react-icons/bs";
import MainLogo from "../../assets/images/logo/main-logo.png";
import { SlSocialFacebook } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#222227] mb-[100px] mt-[30px] ml-[300px] px-8 pt-16 pb-6">
      <div className="flex flex-row  gap-40">
        <div className="flex flex-col gap-2">
          <img src={MainLogo} alt="main-logo" className="w-[120px] pb-2" />
          <p>AMusic - Listen music anywhere</p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2 pt-3">
              <AiOutlineMail className="text-lg text-[#25A56A]" />
              <span className="hover:text-[#25A56A] cursor-pointer">
                support@amusic.com
              </span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <BsTelephone className="text-[#25A56A]" />
              <span className="hover:text-[#25A56A] cursor-pointer">
                0123456789
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-32 pb-12">
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold">The AMusic</h6>
            <div className="flex flex-col gap-4">
              <span className="hover:text-[#25A56A] cursor-pointer">About</span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                My Profile
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Contacts
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">News</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold">Brower</h6>
            <div className="flex flex-col gap-4">
              <span className="hover:text-[#25A56A] cursor-pointer">
                Artists
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Releases
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">Video</span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Podcasts
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold">Title</h6>
            <div className="flex flex-col gap-4">
              <span className="hover:text-[#25A56A] cursor-pointer">News</span>
              <span className="hover:text-[#25A56A] cursor-pointer">Music</span>
              <span className="hover:text-[#25A56A] cursor-pointer">Video</span>
              <span className="hover:text-[#25A56A] cursor-pointer">Store</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="text-white font-semibold">Help</h6>
            <div className="flex flex-col gap-4">
              <span className="hover:text-[#25A56A] cursor-pointer">
                Account & Billing
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Plans & Pricing
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Supported devices
              </span>
              <span className="hover:text-[#25A56A] cursor-pointer">
                Accessibility
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#39393D]" />
      <div className="flex flex-row justify-between items-center">
        <span>© AMusic, 2022. Created by Do Tuan Anh, Pham Quoc An.</span>
        <div className="flex flex-row gap-4">
          <span className="w-[32px] h-[32px] rounded-full bg-[#3B5998] grid place-items-center">
            <FaFacebookF className="text-white" />
          </span>
          <span className="w-[32px] h-[32px] rounded-full bg-[#55ACEE] grid place-items-center">
            <AiOutlineTwitter className="text-white" />
          </span>
          <span className="w-[32px] h-[32px] rounded-full bg-[#FFFFFF] grid place-items-center">
            <AiOutlineInstagram className="text-black" />
          </span>
          <span className="w-[32px] h-[32px] rounded-full bg-[#010101] grid place-items-center">
            <IoLogoTiktok className="text-white" />
          </span>
          <span className="w-[32px] h-[32px] rounded-full bg-[#FF0000] grid place-items-center">
            <BsYoutube className="text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
