import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import React, { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={toggleNavbar}>
        <i className={openLinks ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={openLinks ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;
