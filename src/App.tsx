import React, { MouseEventHandler, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from "./pages/profile";
import Portfolio from "./pages/portfolio";
import HomePage from "./pages/homepage";
import Profilee from "./pages/profile2";
import Homie from "./pages/image1";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/profile" element={<Profilee />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
