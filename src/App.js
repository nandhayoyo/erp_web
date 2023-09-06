// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

const App = () => {
  const [setLoginPopupOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginPopupOpen(true);
  };

  const handleCloseLoginPopup = () => {
    setLoginPopupOpen(false);
  };

  return (
    <Router>
      <Header onLoginClick={handleLoginClick} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
