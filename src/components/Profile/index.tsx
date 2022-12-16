import BreadCrumb from "components/Common/BreadCrumb";
import React from "react";
import ChangePassword from "./ChangePassword";
import ProfileDetails from "./ProfileDetails";

const Profile = () => {
  return (
    <div>
      <BreadCrumb baseAddress="Home" mainAddress="Profile" path="/" />
      <div className="flex flex-col gap-8 mt-12">
        <h2 className="text-4xl text-white">Profile</h2>
        <div className="flex flex-row gap-6">
          <ProfileDetails />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Profile;
