import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";
import FooterSection from "./pages/FooterSection";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import ArtistPage from "pages/ArtistPage";
import ReleasesPage from "pages/ReleasesPage";

function App() {
  return (
    <Router>
      <NavBarPage />
      <div className="pl-[332px] pt-[102px] pr-[32px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/artists" element={<ArtistPage />} />
          <Route path="/releases" element={<ReleasesPage />} />
        </Routes>
      </div>
      <FooterSection />
    </Router>
  );
}

export default App;
