import { useSelector, useDispatch } from "react-redux";

import React from "react";

function Button() {
  const counter2 = useSelector((state) => state.todos.counter);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Todos Counter : {counter2}</p>
      <p>normal Counter : {counter}</p>
      <h1>Normal Counter</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>add one</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>minus one</button>
      <h1>Todos Counter</h1>
      <button onClick={() => dispatch({ type: "plus" })}>add two</button>
      <button onClick={() => dispatch({ type: "minus" })}>minus two</button>
    </>
  );
}

export default Button;
