import React from 'react';
import './not-found.scss';
import {Link} from "react-router-dom";
function NotFound() {
  return (
    <div className="container">
      <div className="fourzerofour">
        <h1>404</h1>
        <p>page not found</p>
        <Link to="/" className="button">Back to home</Link>
      </div>
    </div>
  );
}

export default NotFound;