import React from "react";
import {
  AiOutlineGoogle,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/logo/main-logo.png";

const Login = () => {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center text-sm">
        <div className="hover:text-[#25A56A]">
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <AiOutlineRight className="w-[10px] h-[10px] mt-0.5" />
        <span>Sign in</span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="flex flex-col items-center justify-center w-[420px] h-[560px] border rounded-lg border-[#222227]">
          <div className="mb-8">
            <img src={MainLogo} alt="main-logo" className="h-[30px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Email"
                className="bg-[#222227] h-[48px] w-[340px] border border-transparent rounded-xl"
              />
              <input
                type="text"
                placeholder="Password"
                className="bg-[#222227] h-[48px] w-[340px] border border-transparent rounded-xl"
              />
            </div>
            <div className="flex flex-row items-center">
              <input type="checkbox" className="mr-2 w-[18px] h-[18px]" />
              <span>Remember Me</span>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <div>
                <button className="h-[52px] w-[340px] bg-[#25A56A] border-transparent rounded-xl text-white text-sm hover-[#25A56A] hover:bg-[#222227]">
                  SIGN IN
                </button>
              </div>
              <div>or</div>
              <div className="flex flex-row items-center justify-between gap-4 w-[340px] mt-2">
                <span className="w-[100px] h-[46px] rounded-xl bg-[#3B5998] grid place-items-center text-xl text-white cursor-pointer hover:text-[#3B5998] hover:bg-[#C0C0C0]">
                  <FaFacebookF />
                </span>
                <span className="w-[100px] h-[46px] rounded-xl bg-[#55ACEE] grid place-items-center text-xl text-white cursor-pointer hover:text-[#55ACEE] hover:bg-[#C0C0C0]">
                  <AiOutlineTwitter />
                </span>
                <span className="w-[100px] h-[46px] rounded-xl bg-[#DF4A32] grid place-items-center text-xl text-white cursor-pointer hover:text-[#DF4A32] hover:bg-[#C0C0C0]">
                  <AiOutlineGoogle />
                </span>
              </div>
              <div className="flex flex-row gap-1 items-center mt-6">
                <span className="text-white">Don't have an account?</span>
                <div className="text-[#25A56A]">
                  <NavLink to={"/"}>Sign up!</NavLink>
                </div>
              </div>
              <div className="text-[#25A56A] mt-2">
                <NavLink to={"/"}>Forgot password?</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
