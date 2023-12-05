import React from 'react';
import { Link } from 'react-router-dom'; // Import Link instead of NavLink
import './Navbar.css';
import logo from'./logo.png'

const Navbar = () => {
  return (
    <div className={`header__middle__menus`}>
      <div className="logo-container">
        <img
          src={logo}  // Replace with the path to your logo image
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="main-nav">
        <ul className={`main-menu`}>
          <li className={`menu-item`}>
            <Link to="/home">Home</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/about">About</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/events">Events</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/resources">Resources</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/alumni">Alumni Talk</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/achievements">Achievements</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/gallery">Gallery</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="/feedback">Feedback</Link> {/* Use Link instead of NavLink */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
