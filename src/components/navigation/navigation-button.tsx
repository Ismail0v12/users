import React from 'react';
import {Link} from "react-router-dom";

function NavigationButton() {
  return (
    <div className="header__button">
      <Link to="/sign-up" className="button-filled">Registration</Link>
      <Link to="/sign-in" className="button">Log in</Link>
    </div>
  );
}

export {NavigationButton} ;