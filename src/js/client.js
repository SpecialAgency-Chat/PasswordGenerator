import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {} from "react-bootstrap";

const App = () => {
  return (
    <StrictMode>
      Hello World
    </StrictMode>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);