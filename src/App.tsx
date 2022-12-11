import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";

function App() {
  return (
    <Router>
      <NavBarPage />
      <div className="pl-[316px] pt-[86px]">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
