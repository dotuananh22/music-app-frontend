import NotLoggedInPage from "pages/NotLoggedInPage";
import React from "react";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useSelector((state: any) => state.auth);

  if (auth.loggedIn) {
    return children;
  }

  return <NotLoggedInPage />;
}

export default ProtectedRoute;
