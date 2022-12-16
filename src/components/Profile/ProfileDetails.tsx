import Input from "components/Common/Input";
import colors from "constants/color";
import React from "react";

const ProfileDetails = () => {
  return (
    <div
      className={`p-6 border border-[${colors.lineColor}] rounded-lg basis-2/3`}
    >
      <h6 className="text-white font-semibold text-md mb-4">Profile details</h6>
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
          <Input name="phoneNumber" type="text" placeHolder="Phone Number" />
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
            className="block w-full text-[#C0C0C0] bg-[#222227] border-none rounded-lg cursor-pointer focus:outline-none"
            id="file_input"
            type="file"
            accept="image/*"
          />
        </div>
      </div>
      <button
        className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold`}
      >
        SAVE
      </button>
    </div>
  );
};

export default ProfileDetails;
