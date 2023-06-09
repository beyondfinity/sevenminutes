import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);

  const obj = [
    {
      id: 201,
      header: "Calling Lord",
      text: "Some message regarding calling lord",
      timeout: 3000,
      counter: 3,
    },
    {
      id: 202,
      header: "Praying",
      text: "Some message regarding praying",
      timeout: 5000,
      counter: 5,
    },
    {
      id: 203,
      header: "Reading",
      text: "Some message regarding reading",
      timeout: 4000,
      counter: 4,
    },
  ];
  const [count, setCount] = useState(obj[index].counter);

  useEffect(() => {
    // timeout denotion
    const timeoutInterval = setTimeout(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, obj[index]?.timeout);
    let counterInterval;
    // Counter decreasing logic
    if (obj[index]) {
      counterInterval = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutInterval);
      if (count === 0) {
        clearTimeout(counterInterval);
      }
    };
  }, [index, obj]);

  return (
    <div className="App">
      {obj[index] && (
        <div>
          <h1>{obj[index].header}</h1>
          <p>{obj[index].text}</p>
          <p>{count}</p>
        </div>
      )}
    </div>
  );
}

export default App;
