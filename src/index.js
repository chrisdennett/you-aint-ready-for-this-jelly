import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Jelly4 from "./Jelly4";
// import JellySvg from "./JellySvg";

function App() {
  return (
    <div className="App">
      <Jelly4 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
