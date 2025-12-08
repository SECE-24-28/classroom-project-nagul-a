import React, { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);

  // const fun1 = (value) => {
  //   setCount(count + value);
  // };
  // const fun2 = (value) => {
  //   setCount(count - value);
  // };
  const changeCount = (val) => {
    if(val==-1){
      if(count<=0){
      setCount(count-1);
    }
    else{
      setCount(count+1);
    }
  }
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => changeCount(1)}>Increase</button>
      <button onClick={() => changeCount(-1)}>Decrease</button>
    </div>
  );
};

export default UseStateComponent;
