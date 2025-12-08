import "./App.css";
import { Routes, Route } from "react-router-dom";
import HelloWorldComponent from "./assets/hello-world/hello-world-component";
import OurPromisesComponent from "./assets/promise/promise";
import TrustedbyComponent from "./assets/trusted-by/trusted";
import SymbolOfExcellenceComponent from "./assets/symbol-of-excellence/symbol-of-excellence";
import FourOFourComponent from "./assets/404-component/404-component";
import UseStateComponent from "./assets/usestate-1st/use-state";
import UsestateformComponent from "./assets/use-state-form/use-state-form";
import AddOperation from "./assets/addition-operation-component/addition-operation";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/" element={<TrustedbyComponent />} />
        <Route path="/leetcode/1" element={<SymbolOfExcellenceComponent />} />
        <Route path="*" element={<FourOFourComponent />} />
        <Route path="/use-state-practice" element={<UseStateComponent />} />
        <Route path="/use-state-form" element={<UsestateformComponent />} />
        <Route path="/addition-operation" element={<AddOperation />} />
        {/* <Route path=""/> */}
      </Routes>
    </div>
  );
}

export default App;