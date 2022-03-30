import React, {createContext, useState} from 'react';

interface AuthenticationContextProviderProps {
  readonly children: React.ReactNode
}

const AuthenticationContext = createContext({
  isAuthenticated: false,
  logIn: (token: string) => {
    return;
  }
});


export function AuthenticationContextProvider({children}: AuthenticationContextProviderProps) {
  const token = localStorage.getItem("authenticated");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  function logIn(token: string) {
    localStorage.setItem("authenticated", token);
    setIsAuthenticated(true);
  }


  const context: {
    isAuthenticated: boolean,
    logIn: (token: string) => void
  } = {isAuthenticated, logIn};


  return (
    <AuthenticationContext.Provider value={context}>
      {children}
    </AuthenticationContext.Provider>
  );

}

export default AuthenticationContext;