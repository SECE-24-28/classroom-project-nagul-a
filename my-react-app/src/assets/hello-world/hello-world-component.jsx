import React from "react";
import styled from "styled-components";
import Form from "./Form.jsx";
const HelloWorldStyle = styled.div`
   .parent {
    display: flex;
    flex-direction: column;
    background-color: black;
    //align-items: flex-start;
    // align-items: center;
    // align-items: flex-start;
    //justify-content: flex-end;
    align-items: flex-end;
    //justify-content: space-evenly;
    //justify-content: space-between;
    //  justify-content: space-around;
    gap: 20px;
    height: 100vh;
  }
  .square__child {
    width: 100px;
    height: 50px;
    background-color: red;
    border-radius: 100px;
  }
`;
const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
      </div>
    </HelloWorldStyle>
  );
};
export default HelloWorldComponent;