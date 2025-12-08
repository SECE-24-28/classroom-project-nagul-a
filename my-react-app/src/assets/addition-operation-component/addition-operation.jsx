import React, { useState } from "react";
const AddOperation = () => {
  const [fruites, setFruites] = useState(["apple", "banana"]);
  const addFruites = () => {
    setFruites([...fruites, "mango","grapes"]);
    // setFruites([...fruites, "grapes"]);
    // setFruites
    console.log("The fruites:", fruites);
  };
  return (
    <div>
      <button onClick={addFruites}>Add Fruits</button>
    </div>
  );
};
export default AddOperation;