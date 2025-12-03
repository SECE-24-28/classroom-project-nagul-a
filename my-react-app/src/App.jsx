import React from "react";
import Box from "./assets/hello-world/Box";
import ExcellenceBox from "./assets/hello-world/Excellencebox";
import Position from "./assets/hello-world/position-styles/position";

function App() {
  return (
    <div className="app-root">
      <ExcellenceBox />
      <Box />
      <Position />
    </div>
  );
}

export default App;
