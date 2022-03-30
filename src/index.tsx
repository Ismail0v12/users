import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {BrowserRouter as Router} from "react-router-dom";
import {AuthenticationContextProvider} from "./store/authentication-context-provider";
import ErrorBoundary from "./components/error-boundary";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthenticationContextProvider>
        <Router>
          <App/>
        </Router>
      </AuthenticationContextProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
