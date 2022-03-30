import React from 'react';
import {NavLink} from "react-router-dom";
import CloseIcon from "../../assets/icons/close-icon";
import NavigationSearch from "./navigation-search";

interface NavigationMenuProps {
  readonly setIsMenuOpen: () => void;
  readonly isMenuOpen: boolean;
}

function NavigationMenu({setIsMenuOpen, isMenuOpen}: NavigationMenuProps) {
  const clazz = isMenuOpen ? "header__menu active" : "header__menu";
  return (
    <div className={clazz}>
      <div className="header__menu-overlay" onClick={setIsMenuOpen}/>
      <nav>
        <div className="header__menu-head">
          <h4>Category</h4>
          <span className="button" onClick={setIsMenuOpen}><CloseIcon/></span>
        </div>
        <NavigationSearch setIsMenuOpen={setIsMenuOpen}/>
        <ul>
          <li onClick={setIsMenuOpen}>
            <NavLink
              to="/users"
              className={(navData) => navData.isActive ? "active" : ""}>
              Users
            </NavLink>
            <NavLink
              to="/unknown"
              className={(navData) => navData.isActive ? "active" : ""}>
              Unknown
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationMenu;