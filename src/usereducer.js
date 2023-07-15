import React, { useReducer } from "react";

const initialstate = 0;
const updatecount = (count, action) => {
  switch (action) {
    case "start":
      return count + 1;
    case "reset":
      return count * 0;
    default:
      throw new Error("UnEcepted Error");
  }
};

function Count() {
  const [count, setcount] = useReducer(updatecount, initialstate);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount("start")}>Start</button>
      <span></span>
      <button onClick={() => setcount("reset")}>Reset</button>
    </>
  );
}

export default Count;
