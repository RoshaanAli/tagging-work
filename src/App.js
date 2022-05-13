import logo from "./logo.svg";
import "./App.css";
import { useState, useTransition, useLayoutEffect, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";

function App() {
  // const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  // function handleClick() {
  //   console.log("=== click ===");
  //   fetchSomething().then(() => {
  //     // React 18 with createRoot batches these:
  //     setCount((c) => c + 1); // Does not re-render yet
  //     setFlag((f) => !f); // Does not re-render yet
  //     // React will only re-render once at the end (that's batching!)
  //   });
  // }

  useEffect(() => {
    unstable_batchedUpdates(() => {
    Promise.resolve().then(() => {
      setCounter1((prev) => prev + 1);
      setCounter2((prev) => prev + 2);
      setCounter3((prev) => prev + 3);
    });
    });
  }, [flag]);

  useEffect(() => {
    console.log("render");
  }, [counter1, counter2, counter3]);

  const click = () => setFlag((f) => !f);
  return (
    // <div>
    //   <button onClick={handleClick}>Next</button>
    //   <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
    //   <LogEvents />
    // </div>
    <>
      <div>
        <h1>counter1 : {counter1}</h1>
        <h1>counter2 : {counter2}</h1>
        <h1>counter3 : {counter3}</h1>
        <button onClick={() => setFlag((f) => !f)}>Test1</button>
      </div>
    </>
  );
}
// function LogEvents(props) {
//   useLayoutEffect(() => {
//     console.log("Commit");
//   });
//   console.log("Render");
//   return null;
// }

// function fetchSomething() {
//   return new Promise((resolve) => setTimeout(resolve, 100));
// }

export default App;
