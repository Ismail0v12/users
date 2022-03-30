import React, {useCallback, useContext, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo/logo.png';
import {NavigationButton} from "./navigation-button";
import UserIcon from "../../assets/icons/user-icon";
import AuthenticationContext from "../../store/authentication-context-provider";
import MenuIcon from "../../assets/icons/menu-icon";
import NavigationMenu from "./navigation-menu";
import './navigation.scss';


function Navigation() {
  const {isAuthenticated} = useContext(AuthenticationContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="header">
      <div className="container ">
        <div className="header__wrapper">
          <div className="button header__user" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon/>
          </div>
          <Link to="/" className="header__logo">
            <img src={logo} alt="LYT, stay with us!"/>
          </Link>
          {
            isAuthenticated ? (
              <Link
                to="/profile"
                className="button header__user">
                <UserIcon/>
              </Link>
            ) : <NavigationButton/>
          }
        </div>
        <NavigationMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={menuHandler}
        />
      </div>
    </header>
  );
}

export {Navigation};