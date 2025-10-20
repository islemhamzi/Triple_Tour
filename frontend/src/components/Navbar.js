import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">
          ✈️ Wanderlust
        </Link>
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="dropdown-trigger">Multi-Day Tours</span>
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/tours/amazing-tunisia">Amazing Tunisia</Link></li>
              <li><Link to="/tours/best-of-tunisia">Best of Tunisia</Link></li>
              <li><Link to="/tours/desert">Desert Tours</Link></li>
              <li><Link to="/tours/coastal">Coastal Tours</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/custom-tours">Custom Tours</Link></li>
        <li><Link to="/luxury-experiences">Luxury Experiences</Link></li>
        <li><Link to="/day-tours">Day Tours</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
