import React from 'react';
import { Link } from 'react-router-dom'; // Import Link instead of NavLink
import './Navbar.css';

const Navbar = () => {
  return (
    <div className={`header__middle__menus`}>
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
            <Link to="#">Resources</Link> {/* Use Link instead of NavLink */}
          </li>
          <li className={`menu-item`}>
            <Link to="#">Achievements</Link> {/* Use Link instead of NavLink */}
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
