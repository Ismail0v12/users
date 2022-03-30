import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthenticationContextProvider} from "./store/authentication-context-provider";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <Router>
        <App/>
      </Router>
    </AuthenticationContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
