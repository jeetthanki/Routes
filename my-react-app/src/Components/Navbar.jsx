import React from "react";
import "../Styles/Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2 className="logo">NetBuddy</h2>

        <ul className="nav-links">
          <li>
            <a href="/Netflix">Home</a>
          </li>
          <li>
            <a href="/Watchlist">Watchlist</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
