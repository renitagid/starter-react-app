import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
  return (
    <div className="homebody">

      <h2 className="h2home">Made with React:</h2>
      <NavLink to={"/piglatin"} className="nav-link">
        <img className="logo" src={require("../assets/piglatinicon1.png")}/>
      </NavLink>
      <NavLink to={"/dice"} className="nav-link">
      <img className="logo" src={require("../assets/diceicon1.png")}/>
      </NavLink>
      <NavLink to={"/chooser"} className="nav-link">
      <img className="logo" src={require("../assets/choosericon1.png")}/>
      </NavLink>
      <NavLink to={"/tictactoe"} className="nav-link">
      <img className="logo" src={require("../assets/tictactoeicon1.png")}/>
      </NavLink>
      {/* <li><NavLink to={"/order"} className="nav-link">
      <img className="logo" src={require("../assets/piglatinicon.png")}/>
        Order Food
      </NavLink></li> */}
      <NavLink to={"/madlibs"} className="nav-link">
      <img className="logo" src={require("../assets/madlibsicon1.png")}/>
      </NavLink>
    </div>
  );
};

export default Home;
