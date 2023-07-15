import React, { useState, useCallback } from "react";

const Usecallback = () => {
  const [item, setitem] = useState(["item1", "item2"]);
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter = () => {
    setCount(count - 1);
  };

  let Items = () => {
    console.log("going");
    return item.map((item, i) => {
      console.log("items");
      return (
        <>
          <span key={i}>
            {item}
            <br />
            <br />
            <button>Add</button>
          </span>
        </>
      );
    });
  };

  return (
    <div>
      <span>Count : {count}</span>
      <br />
      <br />
      <button onClick={incrementCounter}>Increase counter</button>
      <span></span>
      <button onClick={decrementCounter}>Decrease Counter</button>
      <span></span>
      <br />
      <br />
      <div id="box">{useCallback(<Items />, count)}</div>
    </div>
  );
};

export default Usecallback;
