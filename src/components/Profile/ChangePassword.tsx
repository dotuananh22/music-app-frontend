import Input from "components/Common/Input";
import colors from "constants/color";
import React from "react";

const ChangePassword = () => {
  return (
    <div
      className={`p-6 border border-[${colors.lineColor}] rounded-lg basis-1/3`}
    >
      <h6 className="mb-4 text-white font-semibold text-md">Change password</h6>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="oldPassword">Old password</label>
          <Input
            name="oldPassword"
            type="password"
            placeHolder="Old password"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="newPassword">New password</label>
          <Input
            name="newPassword"
            type="password"
            placeHolder="New Password"
          />
        </div>
        <div className="flex flex-col gap-2">
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
  );
};

export default ChangePassword;
