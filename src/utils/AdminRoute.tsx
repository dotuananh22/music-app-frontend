import NotAdminPage from "pages/NotAdminPage";
import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../app/store";

function AdminRoute({ children }: { children: JSX.Element }) {
  const auth = useSelector((state: IRootState) => state.auth);

  if (auth.loggedIn && auth.user?.role === "admin") {
    return children;
  }

  return <NotAdminPage />;
}

export default AdminRoute;
