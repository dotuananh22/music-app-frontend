import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";
import FooterSection from "./pages/FooterSection";
import Login from "./components/Login";
import Register from "./components/Register";
import HomePage from "./pages/HomePage";
import ArtistPage from "pages/ArtistPage";

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
        </Routes>
      </div>
      <FooterSection />
    </Router>
  );
}

export default App;
