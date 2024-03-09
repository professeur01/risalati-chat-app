import React from "react";
import Logo from "../assets/img/2.png";
import { NavLink } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-16 bg-indigo-600 md:px-6 py-3">
        <div className="flex justify-between items-center">
          <ul>
            <NavLink to="/">
              <li>Accueil</li>
            </NavLink>
          </ul>
          <img className="w-16" src={Logo} alt="Logo risalati" />
          <ul>
            <NavLink to="/">
              <Signup />
            </NavLink>
            <NavLink to="/">
              <Login />
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
