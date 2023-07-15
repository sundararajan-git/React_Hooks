import React, { useEffect, useRef, useState } from "react";

function Useref() {
  // 1. save data without rendering-----
  const countref = useRef(0);
  const updatecount = () => {
    countref.current++;
  };
  console.log("i am rendering..");

  return (
    <>
      <h1>{countref.current}</h1>
      <button onClick={updatecount}>Change</button>
      <br />
      <br />
      <Todolist></Todolist><br/><br/>
      <Prevalue/>
    </>
  );
}

// ---------------------------------- dom elements-------------------------

function Todolist() {
  const name = useRef("");
  const print = () => {
    console.log(name.current.value);
  };
  return (
    <>
      <input ref={name} type="text" name="name" />
      <br />
      <br />
      <button onClick={print}>Print</button>
    </>
  );
}

// ---------------------------- previes value------------------------------

function Prevalue() {
    // const [prevalue,setvalue] = useState('hello')
    const name = useRef("");
    var Changeout = ()=>{
      console.log(name.current.value);
    }
    return (
      <>
        <input ref={name} type="text" name="name"onChange={Changeout}/>
        <br/>
        <br/>
      </>
    );
  }

export default Useref;

