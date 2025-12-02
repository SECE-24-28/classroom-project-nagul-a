import React from "react";
import styled from "styled-components";
import Form from "./Form.jsx";
const HelloWorldStyle = styled.div`
  background-color: green;
  .element {
    color: red;
  }
`;
const HelloWorld = () => {
  return (
    <div style={{display : "flex",justifyContent:"center",alignItems:"center",height: "100vh",width: "100vw"}}>
      <Form/>
    </div>
  );
};

export default HelloWorld;