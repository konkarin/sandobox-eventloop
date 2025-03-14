"use client";

import { useEffect, useState } from "react";

function clock() {
  let time = 0;
  rec();
  function rec() {
    console.log(time);
    Promise.resolve().then(() => {
      time++;
      if (time <= 5) rec();
    });
  }
}

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect:", document.querySelector("button")?.innerHTML);
  });

  function increment() {
    console.log("increment start");
    clock();
    setCount((count) => count + 1);

    setTimeout(() => {
      console.log("setTimeout");
    }, 0);

    Promise.resolve().then(() => {
      console.log(
        "Promise.resolve:",
        document.querySelector("button")?.innerHTML
      );
    });

    console.log("increment end");
  }

  function showCount(count: number) {
    console.log("showCount:", document.querySelector("button")?.innerHTML);

    return count;
  }

  return (
    <>
      <button onClick={increment}>count is {showCount(count)}</button>
    </>
  );
}
