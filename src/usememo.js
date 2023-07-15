import React, { useMemo, useReducer, useState } from "react";

const initialstate = 0;
const updatecount = (count, action) => {
  switch (action) {
    case "start":
      return count + 1;
      break;
    case "reset":
      return count * 0;
    default:
      throw new Error("UnEcepted Error");
  }
};

function Usememo() {
  const [count, setcount] = useReducer(updatecount, initialstate);
  const [text, settext] = useState([]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  function expensiveCalculation(num) {
    console.log("calculating...");
    for (let i = 0; i < 10000000; i++) {
      num += 1;
    }
    return num;
  }
  const addtodo = () => {
    settext((prev) => [...prev, "React JS"]);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount("start")}>Start</button>
      <span></span>
      <button onClick={() => setcount("reset")}>Reset</button>
      <h1>expensiveCalculation</h1>
      <span>{calculation}</span>
      <br />
      <br />
      {text.map((data, index) => {
        return <p key={index}>{data}</p>;
      })}
      <button onClick={addtodo}>Add</button>
    </>
  );
}

export default Usememo;
