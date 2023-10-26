import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className={`header__middle__menus`}>
        <nav className="main-nav">
          <ul className={`main-menu`}>
            <li className={`menu-item`}>
              <NavLink exact activeClassName="is-active" to="#">
                Home
              </NavLink>
            </li>
            <li className={`menu-item `}>
              <NavLink activeClassName="is-active" to="#">
                About
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                Items Gallery
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                Help Us Find
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                FAQ
              </NavLink>
            </li>
            <li className={`menu-item`}>
              <NavLink activeClassName="is-active" to="#">
                Feedback
              </NavLink>
            </li>
            </ul>
            </nav>
            </div>

    );
};
export default Navbar;
