import React, { useEffect, useReducer } from "react";

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

function UseEffect() {

  const [count, setcount] = useReducer(updatecount, initialstate);

//   --------------------------------- use Effect-------------------------------------------

    //  1. excutes render and  all state changing
//   useEffect(()=>{
//     console.log('all state changeing');
//   })

//   2.excutes render and all depatancies changing

//    useEffect(()=>{
//     console.log('depantancies changing');
//    },[count])

//    3.excutes render only 

useEffect(()=>{
    console.log('depantancies changing');
   },[])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount("start")}>Start</button>
      <span></span>
      <button onClick={() => setcount("reset")}>Reset</button>
    </>
  );
}

export default UseEffect;
