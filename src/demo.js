import React, { useEffect, useState } from "react";

export default function Demo() {
  const [date, setdate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setdate(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  );
}
