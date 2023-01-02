import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
  return (
    <div className="homebody">
      <h1 className="h1home">Projects by Renita</h1>
      <h2 className="h2home">Made with React:</h2>
      <NavLink to={"/piglatin"} className="nav-link">
        <img className="logo" src={require("../assets/piglatinicon.png")}/>
      </NavLink>
      <NavLink to={"/dice"} className="nav-link">
      <img className="logo" src={require("../assets/dicerollicon.png")}/>
      </NavLink>
      <NavLink to={"/chooser"} className="nav-link">
      <img className="logo" src={require("../assets/choosericon.png")}/>
      </NavLink>
      <NavLink to={"/tictactoe"} className="nav-link">
      <img className="logo" src={require("../assets/tictactoeicon.png")}/>
      </NavLink>
      {/* <li><NavLink to={"/order"} className="nav-link">
      <img className="logo" src={require("../assets/piglatinicon.png")}/>
        Order Food
      </NavLink></li> */}
      <NavLink to={"/madlibs"} className="nav-link">
      <img className="logo" src={require("../assets/madlibsicon.png")}/>
      </NavLink>
    </div>
  );
};

export default Home;
