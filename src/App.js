import "./App.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import PigLatin from "./pages/PigLatin";
import DiceRoller from "./pages/DiceRoller";
import NotFound from "./pages/NotFound";
import Chooser from "./pages/Chooser";
import { Routes, Route } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Order from "./pages/Order";
import MadLibs from "./pages/MadLibs";

const App = () => {
  return (
    <div className="mainpage">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="piglatin" element={<PigLatin />} />
        <Route path="dice" element={<DiceRoller />} />
        <Route path="chooser" element={<Chooser />} />
        <Route path="tictactoe" element={<TicTacToe />} />
        <Route path="order" element={<Order />} />
        <Route path="madlibs" element={<MadLibs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
