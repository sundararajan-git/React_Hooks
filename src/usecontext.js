import React, { Component, createContext, useContext, useState } from "react";

const textcontext = createContext();

function Globalstate() {
  const [text] = useState("Rect");
  return (
    <textcontext.Provider value={text}>
      <h1>Globalstate</h1>
      <Component1 />
    </textcontext.Provider>
  );
}

function Component1() {
  return (
    <>
      <h2>component1</h2>
      <Component2 />
    </>
  );
}
function Component2() {
  return (
    <>
      <h2>component2</h2>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h2>component3</h2>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <h2>component4</h2>
      <Component5 />
    </>
  );
}
function Component5() {
  const text = useContext(textcontext);
  return (
    <>
      <h2>{text} component5</h2>
    </>
  );
}

export default Globalstate;
