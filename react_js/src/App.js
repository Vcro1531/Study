import React, { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`Welcome ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
}

export default App;
