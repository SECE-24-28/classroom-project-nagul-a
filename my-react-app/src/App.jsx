import React from "react";
import Box from "./assets/hello-world/Box";
import ExcellenceBox from "./assets/hello-world/Excellencebox";
import Position from "./assets/position-styles/position";
import TrustedbyComponent from "./assets/trusted-by/trusted";
import Touch from "./assets/touch/touch";
import Impact from "./assets/impact/impact";
import Promise from "./assets/promise/promise";

function App() {
  return (
    <div className="app-root">
      {/* <TrustedbyComponent/>
      <ExcellenceBox />
      <Box />
      <Position />
      <Touch/>*/}
      <Impact/>
      <Promise/>
    </div>
  );
}

export default App;
