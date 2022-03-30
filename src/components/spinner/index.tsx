import React from 'react';
import SpinnerIcon from "../../assets/icons/spinner-icon";
import './spinner.scss';

function Spinner() {
  return (
    <div className="spinner">
      <SpinnerIcon/>
    </div>
  );
}

export {Spinner};