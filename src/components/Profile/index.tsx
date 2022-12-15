import BreadCrumb from "components/Common/BreadCrumb";
import Input from "components/Common/Input";
import colors from "constants/color";
import React from "react";

const Profile = () => {
  return (
    <div>
      <BreadCrumb baseAddress="Home" mainAddress="Profile" path="/profile" />
      <div className="flex flex-col gap-8 mt-12">
        <h2 className="text-4xl text-white">Profile</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className={`p-6 border border-[${colors.lineColor}] rounded-lg`}>
            <h6 className="text-white font-semibold text-md mb-4">
              Profile details
            </h6>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="username">Username</label>
                <Input
                  name="username"
                  type="text"
                  placeHolder="Username"
                  disabled={true}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName">Full Name</label>
                <Input name="fullName" type="text" placeHolder="Full Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Input
                  name="phoneNumber"
                  type="text"
                  placeHolder="Phone Number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <Input name="email" type="email" placeHolder="Email" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="birthday">Birthday</label>
                <Input name="birthday" type="date" placeHolder="" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block" htmlFor="file_input">
                  Avatar
                </label>
                {/* File must be image */}
                <input
                  className="block w-full text-sm text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
                  id="file_input"
                  type="file"
                  accept="image/*"
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                  id="file_input_help"
                ></p>
              </div>
            </div>
            <button
              className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold`}
            >
              SAVE
            </button>
          </div>
          <div className={`p-6 border border-[${colors.lineColor}] rounded-lg`}>
            <h6 className="mb-4 text-white font-semibold text-md">
              Change password
            </h6>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2 col-start-1 col-end-1">
                <label htmlFor="oldPassword">Old password</label>
                <Input
                  name="oldPassword"
                  type="password"
                  placeHolder="Old password"
                />
              </div>
              <div className="flex flex-col gap-2 col-start-1 row-start-2">
                <label htmlFor="newPassword">New password</label>
                <Input
                  name="newPassword"
                  type="password"
                  placeHolder="New Password"
                />
              </div>
              <div className="flex flex-col gap-2 col-start-2 row-start-2">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <Input
                  name="confirmPassword"
                  type="password"
                  placeHolder="Confirm New Password"
                />
              </div>
            </div>
            <button
              className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold`}
            >
              CHANGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
