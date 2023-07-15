import React, { useState } from "react";

// -------------------------------- text change ---------------------------------------

function Text() {
  console.log("text...");
  const [text, settetxt] = useState("React JS");
  const changeName = () => {
    settetxt((prev) => (prev === "React JS" ? "Angular JS" : "React JS"));
  };
  return (
    <>
      <h1>{text}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

// ------------------------------------ counter ----------------------------------------------
function Counter() {
  const [count, setcount] = useState(0);
  const Decrement = () => {
    setcount((prev) => prev - 10);
  };
  const Increment = () => {
    setcount((prev) => prev + 10);
  };
  console.log("counter.....");
  return (
    <>
      <h1>{count}</h1>
      <button onClick={Decrement}>Decrement</button>
      <span></span>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export { Text, Counter };
