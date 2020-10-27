import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./context/StateProvider";
import { Routes } from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <Routes />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
