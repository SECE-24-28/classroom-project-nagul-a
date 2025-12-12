import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import HelloWorldComponent from "./assets/hello-world/hello-world-component";
import OurPromisesComponent from "./assets/promise/promise";
import TrustedbyComponent from "./assets/trusted-by/trusted";
import SymbolOfExcellenceComponent from "./assets/symbol-of-excellence/symbol-of-excellence";
import FourOFourComponent from "./assets/404-component/404-component";

import UseStateComponent from "./assets/usestate-1st/use-state";
import UsestateformComponent from "./assets/use-state-form/use-state-form";
import AddOperation from "./assets/addition-operation-component/addition-operation";
import RegisterForm from "./assets/Registration/Registration-form";

import UseEffectComponent from "./use-effect-practice/use-effect-practice";
import UseEffectPracticeTwo from "./use-effect-practice/use-effect-practice-2";
import UseEffectPracticeThree from "./use-effect-practice/use-effect-practice-3";

import FetchApiComponent from "./fetch-api/fetch-api";
import PropsPractice from "./assets/props/propspractice";
import Impact from "./assets/impact/impact";
import Position from "./assets/position-styles/position";
import Colleges from "./assets/college/college";

import SignupFormComponent from "./assets/signup/signup-component";



function App() {
  return (
    <div>

      {/* 🔥 UPDATED NAVBAR */}
      <nav
        style={{
          padding: "15px",
          backgroundColor: "#e9e9e9",
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          fontSize: "17px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/leetcode/1">Symbol of Excellence</Link>
        <Link to="/position">Position</Link>
        <Link to="/trusted-by">Trusted By</Link>
        <Link to="/impact">Impact</Link>

        <Link to="/our-promise">Our Promise</Link>
        <Link to="/flex-wrap">Flex Wrap</Link>
        <Link to="/example">Example</Link>

        {/* State & Props */}
        <Link to="/use-state-practice">Counter</Link>
        <Link to="/props">Props</Link>
        <Link to="/use-state-form">Form</Link>
        <Link to="/addition-operation">Addition</Link>

        {/* API & Effects */}
        <Link to="/api-fetch">API Fetch</Link>
        <Link to="/use-effect">UseEffect</Link>
        <Link to="/use-effect-practice-2">UseEffect2</Link>
        <Link to="/use-effect-practice-3">UseEffect3</Link>

        {/* Register */}
        <Link to="/register">Register</Link>
        <Link to="/sign-up">Sign Up</Link>
      </nav>

      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/eshwar" element={<HelloWorldComponent />} />
        <Route path="/our-promise" element={<OurPromisesComponent />} />
        <Route path="/trusted-by" element={<TrustedbyComponent />} />
        <Route path="/leetcode/1" element={<SymbolOfExcellenceComponent />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/position" element={<Position />} />
        <Route path="/flex-wrap" element={<Colleges />} />

        {/* State */}
        <Route path="/use-state-practice" element={<UseStateComponent />} />
        <Route path="/use-state-form" element={<UsestateformComponent />} />
        <Route path="/addition-operation" element={<AddOperation />} />

        {/* Register */}
        <Route path="/register" element={<RegisterForm />} />

        {/* UseEffect */}
        <Route path="/use-effect" element={<UseEffectComponent />} />
        <Route path="/use-effect-practice" element={<UseEffectComponent />} />
        <Route path="/use-effect-practice-2" element={<UseEffectPracticeTwo />} />
        <Route path="/use-effect-practice-3" element={<UseEffectPracticeThree />} />

        <Route path="/api-fetch" element={<FetchApiComponent />} />
        <Route path="/props" element ={<PropsPractice/>}/>

        {/* 404 */}
        <Route path="*" element={<FourOFourComponent />} />

        <Route path="/sign-up" element={<SignupFormComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
