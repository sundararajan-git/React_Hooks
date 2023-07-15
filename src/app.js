import React from "react";
import { Text, Counter } from "./usestate.js";
import Count from "./usereducer.js";
import Globalstate from "./usecontext.js";
import Usememo from "./usememo.js";
import Usecallback from "./usecallback.js";
import UseEffect from "./useEffect.js";
import Useref from "./useref.js";
import Useid from "./useid.js";
import Demo from "./demo.js";

function App() {
  console.log("app...");
  return (
    <>
      {/* ------------------------ usestate--------------- */}
      {/* <Text /> */}
      {/* <Counter /> */}
      {/* -------------------------- usereducer-------------------- */}
      {/* <Count/> */}
      {/* ------------------------------------ usecontext------------------- */}
      {/* <Globalstate/> */}
      {/* ---------------------------------- usememo------------------------- */}
      {/* <Usememo/> */}
      {/* ---------------------------- use callback - not finised------------------------- */}
      {/* <Usecallback/> */}
      {/* ------------------------ useeffect-------------------------------- */}
      {/* <UseEffect/> */}
      {/* ---------------------------- useref ------------------------ */}
      {/* <Useref/> */}
      {/* --------------------------------- useid------------------ */}
      {/* <Useid/> */}
      {/* --------------------------------- custom hook---------------- */}
      <Demo />
    </>
  );
}

export default App;
