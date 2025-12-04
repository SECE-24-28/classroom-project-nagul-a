// Position.jsx
import React from "react";
import { PositionStyle } from "./positionstyle"; // exact same name as file + export

const Position = () => {
  return (
    <PositionStyle>
       <div className="element"></div>
      <div className="element__one"></div>
      <div className="element__one"></div>
      <div className="element__one"></div>
      <div className="element__one"></div>
      <div className="element__one"></div>
      <div className="element__one"></div>
      <div className="square">
        <div className="square__element"></div>
      </div>
    </PositionStyle>
  );
};

export default Position;
