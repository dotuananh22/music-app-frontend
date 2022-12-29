import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";
import FooterSection from "./pages/FooterSection";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import ArtistPage from "pages/ArtistPage";
import ReleasesPage from "pages/ReleasesPage";
import LibraryPage from "pages/LibraryPage";
import PlaylistsPage from "pages/PlaylistsPage";
import SingerInformationPage from "pages/SingerInformationPage";
import ProfilePage from "pages/ProfilePage";
import ContactsPage from "pages/ContactsPage";
import FavouritePage from "pages/Favourite";
import PolicyPage from "pages/PolicyPage";
import ProtectedRoute from "./utils/ProtectedRoute";
import { useDispatch } from "react-redux";
import authThunk from "features/auth/authThunk";
import { AppDispatch } from "app/store";
import NotFoundPage from "pages/NotFoundPage";
import songThunk from "features/song/songThunk";
import { SkeletonTheme } from "react-loading-skeleton";
import singerThunk from "features/singer/singerThunk";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useLayoutEffect(() => {
    dispatch(authThunk.getUser());
  }, []);
  return (
    <SkeletonTheme baseColor="#222227" highlightColor="#16151A">
      <Router>
        <NavBarPage />
        <div className="pl-[332px] pt-[102px] pr-[32px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/artists" element={<ArtistPage />} />
            <Route path="/releases" element={<ReleasesPage />} />
            <Route
              path="/library"
              element={
                <ProtectedRoute>
                  <LibraryPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/playlist/:id"
              element={
                <ProtectedRoute>
                  <PlaylistsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/singer" element={<SingerInformationPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route
              path="/favourite"
              element={
                <ProtectedRoute>
                  <FavouritePage />
                </ProtectedRoute>
              }
            />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <FooterSection />
        <ToastContainer />
      </Router>
    </SkeletonTheme>
  );
}

export default App;
