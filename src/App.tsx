/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/namespace */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box/Box";
import Box2 from "./components/Box2/Box2";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box name="Prova" />
        <Box2 firstName="firstname" lastName="lastname" />
      </header>
    </div>
  );
}

export default App;
