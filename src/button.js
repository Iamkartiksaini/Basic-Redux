import { useSelector, useDispatch } from "react-redux";

import React from "react";

function Button() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
    </>
  );
}

export default Button;
