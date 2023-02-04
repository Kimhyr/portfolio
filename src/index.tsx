import React from "react";
import ReactDOM, { Root } from "react-dom/client";
import Home from "./pages/home";

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);
