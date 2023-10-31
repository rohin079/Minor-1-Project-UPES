import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className={`header__middle__menus`}>
        <nav className="main-nav">
          <ul className={`main-menu`}>
            <li className={`menu-item`}>
              <NavLink exact activeClassName="is-active" to="/home">
                Home
              </NavLink>
            </li>
            <li className={`menu-item `}>
              <NavLink activeClassName="is-active" to="/about">
                About
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="/events">
                Events
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                Resources
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                Achievements
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="/alumnitalk">
                Alumni Talk
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="/feedbackform">
                Feedback
              </NavLink>
            </li>
            </ul>
            </nav>
            </div>

    );
};
export default Navbar;
