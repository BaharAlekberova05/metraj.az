import React, { useState } from "react";
import Navbar from "./layouts/Navbar";
import { OpenContext } from "./contexts/OpenContext";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <OpenContext.Provider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </OpenContext.Provider>
    </Router>
  );
};

export default App;
