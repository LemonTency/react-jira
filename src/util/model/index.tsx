import { calculate } from "entry";
import React, { useEffect } from "react";
import logo from "logo.svg";

export const Demo = () => {
  useEffect(() => {
    calculate();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React77777
        </a>
      </header>
    </div>
  );
};
