import React from "react";
import { ImEyeBlocked } from "react-icons/im";

const NotLoggedInPage = () => {
  return (
    <div className="relative h-[400px]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center flex-col">
        <ImEyeBlocked className="text-3xl" />
        <p className="text-lg">You must be logged in to access this page.</p>
      </div>
    </div>
  );
};

export default NotLoggedInPage;
