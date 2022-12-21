import Input from "components/Common/InputFormik";
import colors from "constants/color";
import React, { useState } from "react";

const ChangePassword = () => {
  const [changePasswordBody, setChangePasswordBody] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangePasswordBody({
      ...changePasswordBody,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`p-6 border border-[${colors.lineColor}] rounded-lg basis-1/3`}
    >
      <h6 className="mb-4 text-white font-semibold text-md">Change password</h6>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="oldPassword">Old password</label>
          {/* <Input
            name="oldPassword"
            type="password"
            placeHolder="Old password"
            value={changePasswordBody.oldPassword}
            handleChange={handleChange}
          /> */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword">New password</label>
          {/* <Input
            name="newPassword"
            type="password"
            placeHolder="New Password"
            value={changePasswordBody.newPassword}
            handleChange={handleChange}
          /> */}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm New Password</label>
          {/* <Input
            name="confirmPassword"
            type="password"
            placeHolder="Confirm New Password"
            value={changePasswordBody.confirmPassword}
            handleChange={handleChange}
          /> */}
        </div>
      </div>
      <button
        className={`px-16 py-3 mt-4 bg-[${colors.greenColor}] w-auto rounded-lg text-white font-semibold`}
      >
        CHANGE
      </button>
    </div>
  );
};

export default ChangePassword;
