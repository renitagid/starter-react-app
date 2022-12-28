import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Projects:
      <ul>
      <li><NavLink to={"/piglatin"} className="nav-link">
        Pig Latin
      </NavLink></li>
      <li><NavLink to={"/dice"} className="nav-link">
        Dice Roller
      </NavLink></li>
      <li><NavLink to={"/chooser"} className="nav-link">
        Chooser
      </NavLink></li>
      </ul>
    </div>
  );
};

export default Home;
