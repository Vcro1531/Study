import React, { useRef, useState } from "react";

function App() {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref:", countRef.current); //렌더링 되도 초기화 안됨
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("Var:", countVar); //렌더링 되면 값이 0으로 초기화됨
  };

  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <div>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>render</button>
      <button onClick={increaseRef}>Ref UP</button>
      <button onClick={increaseVar}>Var UP</button>
      <button onClick={printResult}>Ref Var 값 print</button>
    </div>
  );
}

export default App;
