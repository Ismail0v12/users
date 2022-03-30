import React from 'react';
import './app.scss';
import {Navigation} from "../navigation";
import Routing from "../routing";

function App() {
  return (
    <>
      <Navigation/>
      <main>
        <Routing/>
      </main>
    </>
  );
}

export default App;