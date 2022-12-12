import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarPage from "./pages/NavBarPage";
import FooterSection from "./pages/FooterSection";

function App() {
  return (
    <Router>
      <NavBarPage />
      <div className="pl-[316px] pt-[86px] pr-[16px]">
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Deserunt fugiat delectus
                blanditiis a odio vero exercitationem nobis, sequi sint incidunt
                quaerat optio doloribus saepe impedit nesciunt est quo laborum
                ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur dolore officiis nostrum commodi minus ea recusandae
                saepe distinctio corporis ipsam. Consequuntur fugiat quis autem
                dolorem! Dolores aliquam repellendus magnam odit. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Alias atque odio
                sunt dicta, expedita veniam, doloremque accusantium architecto
                aut in suscipit rem omnis fugit ducimus vitae quis delectus
                deserunt? Officiis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Deserunt fugiat delectus blanditiis a odio
                vero exercitationem nobis, sequi sint incidunt quaerat optio
                doloribus saepe impedit nesciunt est quo laborum ex. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Aspernatur dolore
                officiis nostrum commodi minus ea recusandae saepe distinctio
                corporis ipsam. Consequuntur fugiat quis autem dolorem! Dolores
                aliquam repellendus magnam odit. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Alias atque odio sunt dicta,
                expedita veniam, doloremque accusantium architecto aut in
                suscipit rem omnis fugit ducimus vitae quis delectus deserunt?
                Officiis!
              </div>
            }
          />
        </Routes>
      </div>
      <FooterSection />
    </Router>
  );
}

export default App;
